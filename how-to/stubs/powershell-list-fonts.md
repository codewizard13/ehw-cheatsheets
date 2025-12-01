### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:
09/13/25


## CONTENT_BELOW: ##

---


# Powershell commands to list fonts


```ps
(Get-ItemProperty 'HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Fonts').PSObject.Properties |
Select-Object Name, Value |
Format-Table -AutoSize |
Out-File -FilePath ehw_outfile_fontList__20250913.txt
```



```powershell
@(
  Get-ItemProperty -Path 'HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Fonts'
  Get-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows NT\CurrentVersion\Fonts'
) | ForEach-Object { $_.PSObject.Properties } | Select-Object Name, Value |
Format-Table -AutoSize | Out-String | Out-File -FilePath "ehw_outfile_fontList_all_20250913.txt"
```