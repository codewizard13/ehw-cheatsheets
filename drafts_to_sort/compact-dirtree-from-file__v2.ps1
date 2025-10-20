# compact-dirtree-from-file__v2.ps1


# If search dir not given, use input
param(
    [string]$searchDir = '',
    [string]$inputFile = 'd:\EHD\Code\md-kbs\ehw-cheatsheets\_sb\folder_list_d.txt',
    [int]$maxDepth = 2
)

$skipNames = @('.git','node_modules')

function File-From-Dir {
    param($directory)

    $outputFile = Join-Path -Path (Split-Path -Parent $MyInvocation.MyCommand.Definition) -ChildPath 'dir_listing.txt'

    # Generate directory listing file for directories up to 3 levels deep, filtered as needed
    Get-ChildItem -Path $directory -Directory -Recurse -Depth 3 |
      Where-Object { $_.Name -notin $skipNames } |
      Select-Object -ExpandProperty FullName |
      Set-Content -Path $outputFile

    return $outputFile
}

# Decide which input file to use:
# If searchDir provided, generate input file from directory, else use inputFile
$inputFile = ($searchDir -and (Test-Path $searchDir)) ? (File-From-Dir $searchDir) : $inputFile

Write-Host "Using input file: $inputFile"

# Main tree building and printing logic

$root = @{}

function Ensure-Entry {
    param($dict, $name)
    if (-not $dict.ContainsKey($name)) {
        $dict[$name] = @{ children = @{}; isSkipped = $false }
    }
    return $dict[$name]
}

Get-Content $inputFile | ForEach-Object {
    $line = $_.Trim()
    if (-not $line) { return }
    $norm = $line -replace '^[\\/]*[a-zA-Z]:[\\/]+','' # normalize drive letter
    $parts = $norm -split '[\\/]' | Where-Object { $_ -ne '' }
    $dict = $root
    foreach ($p in $parts) {
        $entry = Ensure-Entry $dict $p
        if ($skipNames -contains $p) {
            $entry.isSkipped = $true
            break
        }
        $dict = $entry.children
    }
}

function Print-Tree {
    param($dict, $indent=0, $depth=0)
    foreach ($k in $dict.Keys | Sort-Object) {
        $entry = $dict[$k]
        $pad = ' ' * ($indent*2)
        if ($entry.isSkipped) {
            Write-Output ("{0}- {1} [SKIPPED]" -f $pad, $k)
        } else {
            Write-Output ("{0}- {1}" -f $pad, $k)
            if ($depth -lt ($maxDepth - 1)) {
                Print-Tree $entry.children ($indent + 1) ($depth + 1)
            } else {
                $childCount = $entry.children.Keys.Count
                if ($childCount -gt 0) {
                    Write-Output ("{0}  … {1} items" -f (' ' * (($indent + 1)*2)), $childCount)
                }
            }
        }
    }
}

Print-Tree $root 0 0
