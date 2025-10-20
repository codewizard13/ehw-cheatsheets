# Example of how to do a ternary in Powershell
#
# $fruit = (Read-Host -Prompt "Enter a fruit (default: apple)").Trim()
# $fruit = ($fruit) ? $fruit : "apple"


# PowerShell script — paste into a file or run in PS ISE/terminal
param(
  [string]$searchDir = './',
  [string]$inputFile = 'd:\EHD\Code\md-kbs\ehw-cheatsheets\_sb\folder_list_d.txt',
  [int]$maxDepth = 2
)

# If search dir not given, use input file instead otherwise, generate new input file from search dir.
function File-From-Dir 

$skipNames = @('.git','node_modules')

# Root map: name -> @{ children = hashtable; isSkipped = bool }
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
  # normalize leading '/d/' or 'd:\' and split on slashes/backslashes
  $norm = $line -replace '^[\\/]*d[\\/]?',''
  $parts = $norm -split '[\\/]' | Where-Object { $_ -ne '' }
  $dict = $root
  for ($i=0; $i -lt $parts.Count; $i++) {
    $p = $parts[$i]
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
        Print-Tree $entry.children ($indent+1) ($depth+1)
      } else {
        $childCount = $entry.children.Keys.Count
        if ($childCount -gt 0) {
          Write-Output ("{0}  … {1} items" -f (' ' * (($indent+1)*2)), $childCount)
        }
      }
    }
  }
}

Print-Tree $root 0 0

<#
Quick usage notes:
- Increase $maxDepth to show deeper tree levels.
- Add more names to $skipNames to suppress other heavy folders.
- For very large input, redirect output to a file:
    .\compact-dirtree-from-file.ps1 -inputFile .\folder_list_d.txt -maxDepth 3 > compact_map.txt
#>