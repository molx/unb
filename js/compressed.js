function updateQuali(e,a){var r=Array("Nenhuma","Fundamental Completo","Médio Completo","Médio Técnico","Graduação Completa","Especialização","Mestrado","Doutorado"),d=Array(0,1,2,3,4,5,6,7),l=Array(),c=Array(),o=parseFloat(a);for(11>=o?(l=r,c=d):17==o?(l=r.slice(2,r.length),c=d.slice(2,r.length),l.splice(0,1,"Exigência Mínima"),c.splice(0,1,0)):31==o&&(l=r.slice(4,r.length),c=d.slice(4,r.length),l.splice(0,1,"Exigência Mínima"),c.splice(0,1,0));e.ddQuali.options.length;)e.ddQuali.options[0]=null;for(i=0;i<l.length;i++)option=new Option(l[i],c[i]),e.ddQuali.options[e.ddQuali.length]=option;calcSalario(e)}function calcfatorpg(e,a){var r=Array();return r=a?Array(0,.1,.15,.2,.25,.3,.52,.75):Array(0,0,0,.1,.15,.2,.35,.5),r[e]}function firstload(){updateQuali(myform,1),updateQuali(myform2,1)}function validateGD1(e){var a=e||window.event,r=a.keyCode||a.which;r=String.fromCharCode(r);var d=/[0-9]|\./;d.test(r)||(a.returnValue=!1,a.preventDefault&&a.preventDefault())}function validateGD2(e){var a=e.gastoTrans.value;a>20?(a=a.toString().substring(0,a.length-1),a>20&&(a=a.toString().substring(0,a.length-1))):a=parseInt(a,10),e.gastoTrans.value=a,calcSalario(e)}function formatValor(e){var a=/^\d+$/;return 0===e?"R$ 0,00":a.test(e)?"R$ "+e+",00":a.test(10*e)?"R$ "+e.toString().replace(".",",")+"0":"R$ "+e.toString().replace(".",",")}function valorIRRF(e,a){var r=0;return 1==a?r=1710.79>e?0:2563.92>e?.075*e-128.31:3418.6>e?.15*e-320.6:4271.59>e?.225*e-577:.275*e-790.58:4>=a?1787.77>=e?r=0:2679.29>=e?(r=.075*e-134,8):3572.43>=e?(r=.15*e-335,3):r=4463.81>=e?.225*e-602.96:.275*e-826.15:r=1903.98>=e?0:2826.65>=e?.075*e-142.8:3751.05>=e?.15*e-354.8:4664.68>=e?.225*e-636.13:.275*e-869.36,Math.floor(100*r)/100}function valorSaude(e,a,r){var d=Array();d[0]=Array(121.94,127.69,129.42,134.6,138.62,143.22,154.98,157.44,159.9,167.7),d[1]=Array(116.19,121.94,123.67,127.69,131.72,136.32,147.42,149.76,152.1,159.9),d[2]=Array(110.44,116.19,117.92,121.94,125.97,130.57,139.86,142.08,144.3,152.1),d[3]=Array(105.84,110.44,112.16,116.19,120.22,124.82,133.56,135.68,137.8,144.3),d[4]=Array(100.08,105.84,107.56,110.44,114.46,119.07,127.26,129.28,131.3,137.8),d[5]=Array(90.88,93.18,94.91,95.48,99.51,104.11,105.84,107.52,109.2,111.8),d[6]=Array(87.43,88.58,90.31,90.88,94.91,99.51,100.8,102.4,104,106.6),d[7]=Array(82.83,83.98,85.7,86.28,90.31,94.91,95.76,97.28,98.8,101.4);var l=0;l=1500>e?0:2e3>e?1:2500>e?2:3e3>e?3:4e3>e?4:5500>e?5:7500>e?6:7;var c=1;return r>=6&&(c=1.22618),Math.round(d[l][a]*c*100)/100}function valorCreche(e,a){if(6>a){var r=0;return r=6200.8>e?.05:12401.6>e?.1:18602.4>e?.15:24803.2>e?.2:.25,95*(1-r)}return 321}function valorTransporte(e,a){var r=0;return gastodiario=isNaN(a)||0>a?0:.2*Math.ceil((a-1)/.2)+1,r=22*gastodiario-.06*e*(22/30),0>r?0:r}function valorFG(e,a){var r=Array(0,777.26,522.9,423.94,215.78,175.09,128.4,81.89,60.57,49.15),d=Array(0,790.75,531.99,431.3,219.54,187.14,130.63,83.31,61.61,50),l=Array(0,804.49,541.23,438.79,223.35,181.23,132.89,84.75,62.69,50.86),c=0;return c=1==a?r[e]:2>=a?d[e]:l[e]}function calcSalario(e){var a=parseInt(e.ddAno.value,10);e.medico.checked?(ftstep=1.038,base=4>=a?2281.27:2395.33):1==a?(ftstep=1.036,base=1086.32):2==a?(ftstep=1.037,base=1086.32):3==a?(ftstep=1.037,base=1140.64):4==a?(ftstep=1.038,base=1140.64):5==a||6==a?(ftstep=1.038,base=1197.67):7==a?(ftstep=1.038,base=1263.54185):8==a&&(ftstep=1.039,base=1263.54185*1.05);var r=parseFloat(e.ddClasse.value)+parseFloat(e.ddNivel.value)+parseFloat(e.ddProg.value)-3,d=e.ddCargaH.value,l=Math.floor(base*Math.pow(ftstep,r)*d*100)/100,c=0;c=6>a?e.alim.checked?373:0:e.alim.checked?458:0,.5==d&&(c/=2);var o=e.trans.checked?valorTransporte(l,e.gastoTrans.value):0,t=e.insa.checked?.1:0,u=calcfatorpg(e.ddQuali.value,e.areaquali[0].checked),n=e.removeurp.checked?.2605*l*(1+u):0,i=u*l,v=l+n+i+Math.floor(t*l*100)/100,s=e.sintfub.checked?.01*v:0,h=e.saude.checked?valorSaude(v,parseInt(e.ddIdade.value,10),a):0,f=e.creche.checked?valorCreche(v):0,k=valorFG(parseInt(e.ddFG.value,10),a),m=v+h+c+o+f+k,p=l+n+i;e.novopss.checked&&p>4663.75&&(p=4663.75);var g=Math.floor(.11*p*100)/100,A=l+n+i+t*l+k+f-g,y=valorIRRF(A,a),M=Math.round(100*(m-y-g-s))/100;"myform"==e.name?liq1=M:liq2=M,document.getElementById("diffLiqAbs").value=formatValor(Math.abs(Math.round(100*(liq1-liq2))/100)),document.getElementById("diffLiqPor").value=Math.round(100*liq2/liq1)+"%",e.txVB.value=formatValor(l),e.txResult.value=formatValor(M),e.txInsa.value=formatValor(Math.floor(t*l*100)/100),e.txInss.value=formatValor(Math.round(100*g)/100),e.txBruto.value=formatValor(Math.round(100*m)/100),e.txIrrf.value=formatValor(Math.round(100*y)/100),e.txSaude.value=formatValor(h),e.txTrans.value=formatValor(Math.round(100*o)/100),e.txAlim.value=formatValor(c),e.txCreche.value=formatValor(f),e.txURP.value=formatValor(Math.round(100*n)/100),e.txbIRRF.value=formatValor(Math.round(100*A)/100),e.txbINSS.value=formatValor(Math.round(100*p)/100),e.txdesconto.value=formatValor(Math.round(100*(y+g))/100),e.txsintfub.value=formatValor(Math.round(100*s)/100),e.txQualif.value=formatValor(Math.round(100*i)/100)}function inverterform(e){var a=document.forms.myform,r=document.forms.myform2;if("inverter"==e)var d=Array(a.ddClasse.value,a.ddProg.value,a.ddFG.value,a.ddNivel.value,a.ddCargaH.value,a.ddAno.value,a.ddQuali.value,a.saude.checked,a.ddIdade.value,a.removeurp.checked,a.trans.checked,a.gastoTrans.value,a.alim.checked,a.insa.checked,a.creche.checked,a.sintfub.checked,a.areaquali[0].checked,a.areaquali[1].checked,a.novopss.checked),l=Array(r.ddClasse.value,r.ddProg.value,r.ddFG.value,r.ddNivel.value,r.ddCargaH.value,r.ddAno.value,r.ddQuali.value,r.saude.checked,r.ddIdade.value,r.removeurp.checked,r.trans.checked,r.gastoTrans.value,r.alim.checked,r.insa.checked,r.creche.checked,r.sintfub.checked,r.areaquali[0].checked,r.areaquali[1].checked,r.novopss.checked);else if("cima"==e)var l=Array(r.ddClasse.value,r.ddProg.value,r.ddFG.value,r.ddNivel.value,r.ddCargaH.value,r.ddAno.value,r.ddQuali.value,r.saude.checked,r.ddIdade.value,r.removeurp.checked,r.trans.checked,r.gastoTrans.value,r.alim.checked,r.insa.checked,r.creche.checked,r.sintfub.checked,r.areaquali[0].checked,r.areaquali[1].checked,r.novopss.checked),d=l;else var d=Array(a.ddClasse.value,a.ddProg.value,a.ddFG.value,a.ddNivel.value,a.ddCargaH.value,a.ddAno.value,a.ddQuali.value,a.saude.checked,a.ddIdade.value,a.removeurp.checked,a.trans.checked,a.gastoTrans.value,a.alim.checked,a.insa.checked,a.creche.checked,a.sintfub.checked,a.areaquali[0].checked,a.areaquali[1].checked,a.novopss.checked),l=d;a.ddClasse.value=l[0],a.ddProg.value=l[1],a.ddFG.value=l[2],a.ddNivel.value=l[3],a.ddCargaH.value=l[4],a.ddAno.value=l[5],a.saude.checked=l[7],a.ddIdade.value=l[8],a.removeurp.checked=l[9],a.trans.checked=l[10],a.gastoTrans.value=l[11],a.alim.checked=l[12],a.insa.checked=l[13],a.creche.checked=l[14],a.sintfub.checked=l[15],a.areaquali[0].checked=l[16],a.areaquali[1].checked=l[17],a.novopss.checked=l[18],r.ddClasse.value=d[0],r.ddProg.value=d[1],r.ddFG.value=d[2],r.ddNivel.value=d[3],r.ddCargaH.value=d[4],r.ddAno.value=d[5],r.saude.checked=d[7],r.ddIdade.value=d[8],r.removeurp.checked=d[9],r.trans.checked=d[10],r.gastoTrans.value=d[11],r.alim.checked=d[12],r.insa.checked=d[13],r.creche.checked=d[14],r.sintfub.checked=d[15],r.areaquali[0].checked=d[16],r.areaquali[1].checked=d[17],r.novopss.checked=d[18],updateQuali(a,l[0]),updateQuali(r,d[0]),a.ddQuali.value=l[6],r.ddQuali.value=d[6],calcSalario(a),calcSalario(r)}var liq1=0,liq2=0;