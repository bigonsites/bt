function reset(){document.getElementById("dbinput").value="",document.getElementById("dbresult").value="",document.getElementById("errorMessage").innerHTML="",document.getElementById("successShow").innerHTML="",resetButton=document.getElementById("resetButton"),resetButton.innerHTML='<i style="font-size:14px;" class="fas fa-sync mr-2 fa-spin"></i>',setTimeout(()=>{resetButton.innerHTML="RESET"},1e3)}function copy(){if(e=document.getElementById("dbresult").value){const t=document.createElement("textarea");var e;t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),(e=document.getElementById("dbresult")).select(),e.setSelectionRange(0,99999),navigator.clipboard.writeText(e.value)}copyButton.style.backgroundColor="#00b359",copyButton.innerHTML="Copied",setTimeout(()=>{copyButton.style.backgroundColor="#ff5c33",copyButton.innerHTML="Copy"},2e3)}  
