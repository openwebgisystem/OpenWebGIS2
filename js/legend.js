
var strselle='<div id="id_divVectorStyle" style="font-family:Arial;font-size: 13px;">Select Vector Layer name:</br><select id="id_vectorlayer_select" onchange=onchangeSelectVector() >'+
'<option value="wkt">select Layer name</option></select>'+'<p id="CloseStartVectorSyle_id" ><button class=buttonclass type=button onclick=CloseStartVectorSyle()>Close</button></p>'+'<div id="id_divVectorStyle2" style="display:none">'+
'<li> <a>point radius:</a><input id=pRadius type="text" style="width:20px" size="1" value="3"><a>stroke width:</a>'+
'<input id=pStroke type="text" style="width:20px" size="1" value="1"><a>opacity Layer (from 0 to 1):</a>'+
'<input id=pOpacity type="text" style="width:20px" size="1" value="1"><a>opacity Stroke:</a>'+
'<input id=pOpacitySt type="text" style="width:20px" size="1" value="1"></li>'+
'<li><a>fill color:</a>'+
//'<div id="paletteCs"></div></li>'+
'<li><div id="blockleg" onclick="clickDivColor(this)" style="background: #ccc;border: 1px solid black; width: 45px;height: 15px;"></div></li>'+
'<li><a>stroke color:</a>'+
//'<div id="paletteCstroke"></div></li>'+
'<li><div id="blocklegStrokeColor" onclick="clickDivColor(this)" style="background: #ccc;border: 1px solid black; width: 45px;height: 15px;"></div></li>'+
'<a href="#" onclick=openLabelsettingsDiv()>Label settings<a>'+
'<li><div id="blockleglabel" style="width:490px; border:1px double black;display:none"> <a>set label:</a><br>'+
'<select id="id_labelOpen" multiple size="3"> '+
' <option value="0">.</option>'+
'</select>'+
'<!--<a>XOffset:</a><input id="id_pLabelXoff" type="text" size="5" value="50"><a>YOffset:</a><input id="id_pLabelYoff" type="text" size="5" value="-15">-->'+
'<a>font size:</a><input id="id_pLabelFont" type="text" size="5" value="12">'+
' <a>set align:</a>'+
'<select id="id_labelAlign" > '+
'<option value="center" selected="selected">center</option>'+
'<option value="end">end</option>'+
'<option value="left">left</option>'+
'<option value="right">right</option>'+
'<option value="start">start</option>'+
'</select>'+
'<input type="checkbox" title="if not checked then all will be written into a string" id="id_RowColomLabel" title="" value="checkbox" checked/><a style="font-size:10px">write in column</a><br>'+
'<input type="checkbox" title="" id="id_RandomTextLabel" title="" value="checkbox"/><a style="font-size:10px">arbitrary text:</a>'+
'<textarea style="width:40px;height:20px" title="insert arbitrary text for label" id="textRandomlabel" name="text"></textarea><br>'+
'<div style="position:relative"><a style="float:left">color of label:</a><div title="select color of label text" id="id_ColorText1" onclick="clickDivColor(this)"'+ 'style="position:relative;width:15px;height:15px;cursor:pointer;background:#bbbbbb; border:1px double black; float:left"></div>'+
'<a style="float:left">stroke color of label:</a><div title="select stroke color of label text" id="id_StColorText1" onclick="clickDivColor(this)"'+ 'style="position:relative;width:15px;height:15px;cursor:pointer;background:#bbbbbb; border:1px double black; float:left">'+'</div>'+
'<a style="float:left">stroke width:</a><input style="float:left;width:20px" id="id_pLabelStrokeW" type="text" size="1" value="0">'+ 
'<a style="float:left">stroke opacity:</a><input style="float:left;width:20px" id="id_pLabelStrokeOp" type="text" size="1" value="1">'+
'</div>'+
'<br><br><input type="checkbox" id="id_CheckNameLabel" title="" value="checkbox" checked/><a>show name of attribute;</a><a> font opacity:</><input id="id_pLabelFontOpac" type="text" title="value beetwen 0 and 1" size="1" style="width:25px"value="0.9">'+
'<a> font style:</a><select id="id_labelfontStyle" > '+
'<option selected value="normal">normal</option>'+
'<option value="italic">italic</option>'+
'<option value="oblique">oblique</option>'+
'</select><br>'+
'<a> font weight:</a><select id="id_labelfontWeight" > '+
'<option selected value="normal">normal</option>'+
'<option value="lighter">lighter</option>'+
'<option value="bold">bold</option>'+
'<option value="bolder">bolder</option>'+
'</select>'+'<a> TextBaseline:</a><select id="id_labelTextBaseline" > '+
'<option value="alphabetic">alphabetic</option>'+
'<option value="bottom">bottom</option>'+
'<option value="hanging">hanging</option>'+
'<option value="ideographic">ideographic</option>'+
'<option value="middle" selected="selected">middle</option>'+
'<option value="top">top</option>'+
'</select><br>'+
'<a> font family:</a><select id="id_labelfontFamily" > '+
'<option selected value="Courier New, monospace" style="font-size:11px">Courier New, monospace</option>'+
'<option value="Georgia, serif">Georgia, serif</option>'+
'<option value="&quot;Palatino Linotype&quot; , &quot; Book Antiqua&quot;, Palatino, serif">&quot;Palatino Linotype&quot;, &quot;Book Antiqua&quot;, Palatino, serif</option>'+
'<option value="&quot;Times New Roman&quot;, Times, serif">&quot;Times New Roman&quot;, Times, serif</option>'+
'<option value="Arial, Helvetica, sans-serif">Arial, Helvetica, sans-serif</option>'+
'<option value="&quot;Arial Black&quot;, Gadget, sans-serif">&quot;Arial Black&quot;, Gadget, sans-serif</option>'+
'<option value="&quot;Comic Sans MS&quot;, cursive, sans-serif">&quot;Comic Sans MS&quot;, cursive, sans-serif</option>'+
'<option value="Impact, Charcoal, sans-serif">Impact, Charcoal, sans-serif</option>'+
'<option value="Tahoma, Geneva, sans-serif">Tahoma, Geneva, sans-serif</option>'+
'<option value="&quot;Trebuchet MS&quot;, Helvetica, sans-serif">&quot;Trebuchet MS&quot;, Helvetica, sans-serif</option>'+
'<option value=&quot;Verdana, Geneva, sans-serif&quot; >Verdana, Geneva, sans-serif</option>'+
'<option value="&quot;Lucida Console&quot;, Monaco, monospace">&quot;Lucida Console&quot;, Monaco, monospace</option>'+
'</select>'+
'<br><button class=buttonclass type=button onclick=deleteAttributes()>Delete selected attributes</button>'+
'</div>'+
'</li>'+
'<a style="font-size: 10px;">Select image file for marker</a>'+
'<br><input title="Select image file for marker." class="buttonclass" style="color:transparent" type="file" id="file_idImage"><a style="font-size: 10px;">Or insert URL of image:</a><textarea id="id_imageUrlTextArea" style="width: 160px; height: 20px;font-size:11px"></textarea><br>'+
'Width marker:<input id=id_pWidth type="text" size="5" value="15">'+
'Height marker:<input id=id_pHeight type="text" size="5" value="15">'+
'<br>Rename Layer to:<input id=id_pRenameLayer type="text" size="15" value="NewLayerName"><button class=buttonclass type=button onclick=RenameLayer_OK()>rename</button>'+
'<br>Add attribute:<input id=id_pNameAttribute type="text" size="10" value="NewAttribute">attribute name<input id=id_pValueAttribute type="text" size="5" value="0">attribute value&nbsp;'+
'<button class=buttonclass type=button onclick=AddAttribute_OK()>add attribute</button>'+
'<div class="oks"> <p> <button class=buttonclass type=button onclick=OK()>OK - update legend</button><button class=buttonclass type=button onclick=visible_unvisibleVectorLayer()>Visibe/Invisible Layer</button><button  class=buttonclass type=button onclick=deleteVectorLayer()>Delete Layer</button><button class=buttonclass type=button onclick=OKc()>Close</button></p>'+
'</div><center><font size=+3>'+
'</font></center>'+
//'</div>'+
'<div id="classnum"  class="blockRuleS" onchange="setField()">'+
'<li> <a>classification:</a>'+
'<select id=pClass > '+
' <option selected value="0">0</option>'+
'<option value="1">2</option><option value="2">3</option>'+
'<option value="3">4</option><option value="4">5</option>'+
'<option value="5">6</option><option value="6">7</option>'+
'<option value="7">8</option><option value="8">9</option>'+
'<option value="9">10</option><option value="10">11</option>'+
'<option value="11">12</option><option value="12">13</option>'+
'<option value="13">14</option><option value="14">15</option><option value="15">16</option><option value="16">17</option>'+
'<option value="17">18</option><option value="18">19</option><option value="19">20</option><option value="20">21</option>'+
'<option value="21">22</option><option value="22">23</option><option value="23">24</option><option value="24">25</option>'+
'<option value="25">26</option><option value="26">27</option><option value="27">28</option><option value="28">29</option>'+
'<option value="29">30</option>'+
'</select>'+
'</li><br>'+
'<button class="buttonclass" type=button onclick=SetCluster()>Set clustering strategy</button>'+
'</div>'+
'<div id="classfield"  class="blockfield" >'+
'<li> <a>field:</a>'+
'<select id=pField onchange="setRules()"> '+
' <option selected value="0">0</option>'+
'</select>'+
'</li><br>'+
'<button class="buttonclass" type=button onclick=OK_automaticLegend()>Set automatically</button>'+
'</div>'+
'<div id="classRules"  class="blockRulesSet" >'+
'<li> <a>Rules:</a>'+
'</li><br>'+
'</div>'+
'<div id="classMinMax"  class="blockMinMax" >'+
'<li> <a id="MinimumValueLayer">Minimum:</a>'+
'</li><br>'+
'<li> <a id="MaximumValueLayer">Maximum:</a>'+
'</li><br>'+
'</div></div>';
var layerLegend;
var layerLegendType;
var layerLegendMain;
var colorLeg;
var colorLegStroke;
var pRadStart;
var pstrokeWidthStart;
var divPal = new Array();
var divPalB = new Array();
var LegendIndex = new Array();
var SizeInput=new Array();
var imageMarkerAr=new Array();
var LegendValue=new Array();
var LegendText=new Array();
var LegentTextName=new Array();
var LegendLabel=new Array();
var LegendMarker=new Array();
var LegendLabelObj=new Array();
var LegendStrockR=new Array();
var fileZIPl;
var labelAtrrinute;
var fileZIP2l=new Array();
var imageMarkerWH=new Array();


var fillColorLegend;
var pRadLegend;
var pOpacityLegend;
var pStrokeLegend;
var StrokeColorLegend;
var divPalMain = new Array();
var divPalBMain = new Array();
var LegendStrockRMain = new Array();
var LegendIndexMain = new Array();
var LegendTextMain=new Array();
var LegendTextNameMain=new Array();
var SizeInputMain= new Array();
var LegendValueMain=new Array();
var LegendFieldMain;
var pLegendImageWebGis;
var pLegendImageWebGisW;
var pLegendImageWebGisH;
var imageMarkerArWebGis=[];
var imageMarkerArWebGisWH=[];
var AndroidfileZIP='';
function openLabelsettingsDiv()
{
document.getElementById("blockleglabel").style.display=='none'?document.getElementById("blockleglabel").style.display='block':document.getElementById("blockleglabel").style.display='none';
}
function clickDivColor(divElem)
{var DivEditeLeg=document.createElement("div");
var left=divElem.offsetLeft+'px';var top=divElem.offsetTop+'px';
if(divElem.id=='id_ColorText1'||divElem.id=='id_StColorText1'){var left=divElem.parentNode.offsetLeft+'px';var top=divElem.parentNode.offsetTop+'px';}
DivEditeLeg.innerHTML='<div id="id_id_divColorLegend" style="background:#ffffff; color:#000000;z-index: 6000;position:absolute;overflow:hidden; border: 1px solid black;left:'+left+' ; top:'+ top+';width: 50%; height: 10%;">'+
'<input class="colorpickerowg" type="text" style="" id="id_colorpicker"><button id=OKbuttonColor class=buttonclass type=button >OK</button>'+
'</div>';
if(!document.getElementById("id_id_divColorLegend"))
{document.getElementById('id_legendOWG').appendChild(DivEditeLeg);

var el=DivEditeLeg.getElementsByClassName("colorpickerowg")[0];
DivEditeLeg.getElementsByClassName("buttonclass")[0].onclick=function(){OKColorButton(DivEditeLeg,divElem)}
var picker = new CP(el);
picker.enter();
picker.on("change", function(color) {
        this.target.value = '#' + color;

    });
 DivEditeLeg.appendChild(document.getElementsByClassName("color-picker")[0])

document.getElementsByClassName("color-picker")[0].style.top=parseInt(top.split('px')[0])+el.offsetHeight+'px';
document.getElementsByClassName("color-picker")[0].style.left=left;


picker.on("enter", function(color) {
    DivEditeLeg.appendChild(document.getElementsByClassName("color-picker")[0])
var el=DivEditeLeg.getElementsByClassName("colorpickerowg")[0];
document.getElementsByClassName("color-picker")[0].style.top=parseInt(top.split('px')[0])+el.offsetHeight+'px';
document.getElementsByClassName("color-picker")[0].style.left=left;
});
}
}
function OKColorButton(elem1,elem2)
{
if(elem2.id=='blockleg')
{elem2.style.background='rgb('+CP.HEX2RGB(elem1.getElementsByClassName("colorpickerowg")[0].value.split('#')[1])+')';
fillColorLegend=CP.HEX2RGB(elem1.getElementsByClassName("colorpickerowg")[0].value.split('#')[1]);}
if(elem2.id=='blocklegStrokeColor')
{elem2.style.background='rgb('+CP.HEX2RGB(elem1.getElementsByClassName("colorpickerowg")[0].value.split('#')[1])+')';
StrokeColorLegend=CP.HEX2RGB(elem1.getElementsByClassName("colorpickerowg")[0].value.split('#')[1]); rtt=StrokeColorLegend;}
elem1.parentNode.removeChild(elem1);
if(elem2.id=='id_ColorText1')
{elem2.style.background='rgb('+CP.HEX2RGB(elem1.getElementsByClassName("colorpickerowg")[0].value.split('#')[1])+')';
document.getElementById("id_ColorText1").tempColorGIS=CP.HEX2RGB(elem1.getElementsByClassName("colorpickerowg")[0].value.split('#')[1]); }
if(elem2.id=='id_StColorText1')
{elem2.style.background='rgb('+CP.HEX2RGB(elem1.getElementsByClassName("colorpickerowg")[0].value.split('#')[1])+')';
document.getElementById("id_StColorText1").tempColorGIS=CP.HEX2RGB(elem1.getElementsByClassName("colorpickerowg")[0].value.split('#')[1]); }

}
function initLegend()
{
var body = document.body; var docElem = document.documentElement;
 var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop; var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
 var clientTop = docElem.clientTop || body.clientTop || 0; var clientLeft = docElem.clientLeft || body.clientLeft || 0
 var topTop = 0 + scrollTop - clientTop; var leftLeft =0 + scrollLeft - clientLeft
var DivEditeLeg=document.createElement("div");DivEditeLeg.id="id_legendOWG";DivEditeLeg.style.cursor="default"



//DivEditeLeg.style.width=screen.width;DivEditeLeg.style.height=screen.height;
DivEditeLeg.style.height= ('innerHeight' in window? window.innerHeight :document.compatMode!=='BackCompat'? document.documentElement.clientHeight :
document.body.clientHeight);
DivEditeLeg.style.width= ('innerWidth' in window? window.innerWidth :document.compatMode!=='BackCompat'? document.documentElement.clientWidth :
document.body.clientWidth);
DivEditeLeg.style.opacity="1";DivEditeLeg.style.height=parseInt(DivEditeLeg.style.height.split("px"))+100+"px";DivEditeLeg.style.width=parseInt(DivEditeLeg.style.width.split("px"))+100+"px"
DivEditeLeg.className="id_divRoutLegMain";DivEditeLeg.style.position="absolute";DivEditeLeg.style.display="block";
DivEditeLeg.style.zIndex = 300000;DivEditeLeg.style.background="#ffffff";DivEditeLeg.style.border="2px solid black";DivEditeLeg.style.color="#000000";
//DivEditeLeg.style.left=Math.round(document.body.clientWidth/2+200);DivEditeLeg.style.top="0px";


DivEditeLeg.style.right="0.5em";DivEditeLeg.style.top="2.5em";


DivEditeLeg.innerHTML=strselle;
if(!document.getElementById("id_legendOWG"))
{document.getElementById('menu_main').appendChild(DivEditeLeg); 
var c;fillColorLegend=c;StrokeColorLegend=c;

document.getElementById("id_legendOWG").addEventListener("mousedown", saveXY, false);
document.getElementById("id_legendOWG").addEventListener("touchstart", saveXY, false);
}
document.getElementById('file_idImage').addEventListener('change', readSingleFileImg, false);


document.getElementById("id_vectorlayer_select").innerHTML='';
var t=document.createElement('option');t.value='select layer';t.text='select layer';document.getElementById("id_vectorlayer_select").appendChild(t);
layer_vector_group.getLayers().forEach(function(layer_arr){var t=document.createElement('option');t.value=layer_arr.get('name');t.text=layer_arr.get('name');document.getElementById("id_vectorlayer_select").appendChild(t);})
if(document.getElementById("id_vectorlayer_select").options.length==1){alert("No vector Layers for export")}




var  arrFeaturesel;
document.getElementById("pClass").value=0;
//drawPalette();
//drawPaletteStroke();


}
function RenameLayer_OK()
{
x=confirm('Are you sure?');
 if (x==true) {
layerLegendType=document.getElementById("id_vectorlayer_select").value;
layer_vector_group.getLayers().forEach(function(layer_arr)
{if(layer_arr.get('name')==layerLegendType){
layer_arr.set('name', document.getElementById("id_pRenameLayer").value);
      layer_arr.set('title', document.getElementById("id_pRenameLayer").value);
      layerLegendMain=document.getElementById("id_pRenameLayer").value;
      var ListL=document.getElementById('id_vectorlayer_select');
for (var k=0; k<ListL.length; k++)
{if(ListL.options[k].value==document.getElementById("id_vectorlayer_select").value)
{
ListL.options[k].value=document.getElementById("id_pRenameLayer").value;;ListL.options[k].text=document.getElementById("id_pRenameLayer").value;

}}
}})
}

}
function deleteAttributes()
{layerLegendType=document.getElementById("id_vectorlayer_select").value;
x=confirm('Are you sure?');
 if (x==true) {
id_labelOpen
var o=document.getElementById("id_labelOpen");
var attributesList = [];
for (var i = 0; i < o.options.length; i++){ if (o.options[i].selected) {attributesList.push(o.options[i].value);}}

layer_vector_group.getLayers().forEach(function(layer_arr)
{if(layer_arr.get('name')==layerLegendType){
layer_arr.getSource().getFeatures().forEach(function(feature){rtt=feature;var attrib=feature.getProperties();rtt=attrib; for(var a=0;a<attributesList.length;a++)
{for (h in attrib){if(h==attributesList[a]){delete feature.T[h]}  }}  } ) ;
for(var a=0;a<attributesList.length;a++)
{var ListL=document.getElementById('id_labelOpen');
for (var k=0; k<ListL.length; k++)
{if(ListL.options[k].value==attributesList[a]){ListL.removeChild(ListL.options[k]);}} }
alert('attribute(s) deleted');

}})



}
}
function AddAttribute_OK()
{ layerLegendType=document.getElementById("id_vectorlayer_select").value;
layer_vector_group.getLayers().forEach(function(layer_arr)
{if(layer_arr.get('name')==layerLegendType){
layer_arr.getSource().getFeatures().forEach(function(feature){feature.setProperties({[document.getElementById("id_pNameAttribute").value]:document.getElementById("id_pValueAttribute").value}) } ) ;
var t=document.createElement('option');
t.value=document.getElementById("id_pNameAttribute").value;t.text=document.getElementById("id_pNameAttribute").value;
document.getElementById("id_labelOpen").appendChild(t);alert('attribute added');return;}})

}
function visible_unvisibleVectorLayer()
{
layerLegendType=document.getElementById("id_vectorlayer_select").value;
layer_vector_group.getLayers().forEach(function(layer_arr)
{if(layer_arr.get('name')==layerLegendType){
layer_arr.getVisible()?layer_arr.setVisible(false):layer_arr.setVisible(true)
}
})
}
function deleteVectorLayer()
{
x=confirm('Are you sure?');
 if (x==true) {
layerLegendType=document.getElementById("id_vectorlayer_select").value;
layer_vector_group.getLayers().forEach(function(layer_arr)
{if(layer_arr.get('name')==layerLegendType){
layer_vector_group.getLayers().remove(layer_arr);
var ListL=document.getElementById('id_vectorlayer_select');
for (var k=0; k<ListL.length; k++)
{if(ListL.options[k].value==layerLegendType){ListL.removeChild(ListL.options[k]);}}
//map.removeLayer(layer_arr);
alert('Layer deleted');
}  })
}
}
function CloseStartVectorSyle()
{document.getElementById("id_legendOWG").parentNode.removeChild(document.getElementById("id_legendOWG"));}
function onchangeSelectVector()
{ 
if(document.getElementById("CloseStartVectorSyle_id")){document.getElementById("CloseStartVectorSyle_id").parentNode.removeChild(document.getElementById("CloseStartVectorSyle_id"));}
layerLegendType=document.getElementById("id_vectorlayer_select").value;
layerLegendMain=document.getElementById("id_vectorlayer_select").value;
layerLegend=document.getElementById("id_vectorlayer_select").value;
document.getElementById("id_labelOpen").innerHTML=''; 
layer_vector_group.getLayers().forEach(function(layer_arr){

  if (layer_arr.get('name')==layerLegendType)
{if(layer_arr.getSource().getFeatures()[0]){for (var a in layer_arr.getSource().getFeatures()[0].getProperties())
{var t=document.createElement('option');
t.value=a;t.text=a;
document.getElementById("id_labelOpen").appendChild(t);}}}
try{
layerLegendMain= layerLegend;
}
catch(e){} 
})
document.getElementById("id_divVectorStyle2").style.display='block';
document.getElementById("id_legendOWG").style.width="700px";document.getElementById("id_legendOWG").style.overflow="auto";

}
function GetTextLabel(feature, resolution,obAtr)
{
var strLab='';var rowc=''; var strlab1='';
if(obAtr.rowcol==true){rowc='\n';}
if(obAtr.name)
{
for(var z=0;z<obAtr.name.length;z++)
{
if(obAtr.ckeckname==true)
{strlab1=obAtr.name[z]+":";}
var dop='';if(z>0){dop=' ';}
strLab+=dop+strlab1+feature.get(obAtr.name[z])+rowc;
}}
if(obAtr.randomText==true)
{strLab=obAtr.randomTextText;}

return strLab;
}
function createStyleFunction(layerStyle,obAtr) {
  return function(feature, resolution) {
layerStyle.getText().setText(GetTextLabel(feature, resolution,obAtr));
if(typeof(obAtr.colorlab)!='undefined'){layerStyle.getText().setFill(new ol.style.Fill({color:[obAtr.colorlab[0],obAtr.colorlab[1],obAtr.colorlab[2],obAtr.fontopac*1]})) }
if(typeof(obAtr.stcolorlab)!='undefined'){layerStyle.getText().setStroke(new ol.style.Stroke({color:[obAtr.stcolorlab[0],obAtr.stcolorlab[1],obAtr.stcolorlab[2],obAtr.fontstroke_op*1],width:obAtr.fontstroke_w*1})) }
layerStyle.getText().setFont(obAtr.fontWeight+' '+obAtr.fontsize+'px'+' '+obAtr.fontFamily);
layerStyle.getText().setTextAlign(obAtr.fontAlign);layerStyle.getText().setTextBaseline(obAtr.fontbaseline);
    var style = layerStyle;
    return style;
  };
};
function updateLegend()
{
var pRad;

layer_vector_group.getLayers().forEach(function(layer_arr){
if(layer_arr.get('name')==layerLegendMain)
{
if(!layer_arr.styleTemp){layer_arr.styleTemp=layer_arr.getStyle()}
//mLayers[a].styleMap.styles.default.defaultStyle.pointRadius=pRadLegend;
var ob=JSON.stringify(labelAtrrinuteMain);layer_arr.labelAtrrinuteMain=JSON.parse(ob);
if(pRadLegend==''){pRadLegend=3}; rtt=layer_arr.styleTemp; 
if(typeof(fillColorLegend)!='undefined')
{layer_arr.styleTemp.getFill().setColor([fillColorLegend[0],fillColorLegend[1],fillColorLegend[2],layer_arr.labelAtrrinuteMain.opacitymain*1]);

layer_arr.styleTemp.getImage().getFill().setColor([fillColorLegend[0],fillColorLegend[1],fillColorLegend[2],layer_arr.labelAtrrinuteMain.opacitymain*1]);
}
if(typeof(StrokeColorLegend)!='undefined')
{
layer_arr.styleTemp.getStroke().setColor([StrokeColorLegend[0],StrokeColorLegend[1],StrokeColorLegend[2],layer_arr.labelAtrrinuteMain.opacitymain_st*1]);

layer_arr.styleTemp.getImage().getStroke().setColor([StrokeColorLegend[0],StrokeColorLegend[1],StrokeColorLegend[2],layer_arr.labelAtrrinuteMain.opacitymain_st*1]);
rtt=layer_arr.styleTemp.getImage().getStroke().getColor();
}
//rtt=[fillColorLegend[0],fillColorLegend[1],fillColorLegend[2],1]; 
layer_arr.styleTemp.getImage().getStroke().setWidth(pStrokeLegend);
layer_arr.styleTemp.getStroke().setWidth(pStrokeLegend);


rtt=labelAtrrinuteMain;; 
layer_arr.styleTemp.getImage().setRadius(pRadLegend);

if(labelAtrrinuteMain.name&&labelAtrrinuteMain.name.length>0)
{
var layerStyle=layer_arr.styleTemp.clone();var obAtr=layer_arr.labelAtrrinuteMain;
layer_arr.setStyle(createStyleFunction(layerStyle,obAtr));
//layer_arr.setStyle(layerStyle)
//layer_arr.getStyle().getText().setText(GetTextLabel(feature, resolution, dom));
//styleText=new ol.style.Text({
    //textAlign: align,
    //textBaseline: baseline,
    //font: font,
    //text: GetTextLabel(feature, resolution, dom),
    //fill: new ol.style.Fill({color: fillColor}),
    //stroke: new ol.style.Stroke({color: outlineColor, width: outlineWidth}),
    //offsetX: offsetX,
    //offsetY: offsetY,
   // rotation: rotation
 // });

}else{layer_arr.styleTemp.getImage().setRadius(pRadLegend);layer_arr.setStyle(layer_arr.styleTemp);}
layer_arr.getSource().changed();
/*mLayers[a].styleMap.styles.default.defaultStyle.strokeWidth=pStrokeLegend;
mLayers[a].styleMap.styles.default.defaultStyle.fillOpacity=pOpacityLegend;
mLayers[a].styleMap.styles.default.defaultStyle.strokeOpacity=pOpacityLegend;
mLayers[a].styleMap.styles.default.defaultStyle.externalGraphic=pLegendImageWebGis;
mLayers[a].styleMap.styles.default.defaultStyle.graphicWidth=15;
mLayers[a].styleMap.styles.default.defaultStyle.graphicHeight=15;
mLayers[a].styleMap.styles.default.defaultStyle.fillColor=fillColorLegend;
mLayers[a].styleMap.styles.default.defaultStyle.strokeColor=StrokeColorLegend;*/
/*var rulestLayer;
var rulesArray= new Array();
var rulesEl= new Array();
var arrayt=new Array();
var newLegendDiv='';
for(var i=0; i<=LegendIndexMain.length-1; ++i) 
{
var strLab='';
var strlab1='';
var rowc='';
if(labelAtrrinuteArrayMain[i].name)
{if(labelAtrrinuteArrayMain[i].rowcol==true){rowc='\n';}
if(labelAtrrinuteArrayMain[i].name)
{
for(var z=0;z<labelAtrrinuteArrayMain[i].name.length;z++)
{
if(labelAtrrinuteArrayMain[i].ckeckname==true)
{strlab1=labelAtrrinuteArrayMain[i].name[z]+":";}
var dop='';if(z>0){dop=' ';}
strLab+=dop+strlab1+"${"+labelAtrrinuteArrayMain[i].name[z]+"}"+rowc;
}}
if(labelAtrrinuteArrayMain[i].randomText==true)
{strLab=labelAtrrinuteArrayMain[i].randomTextText;}
}

var strWidthline=1;
if(mLayers[a].features[0]&&(mLayers[a].features[0].geometry.CLASS_NAME=='OpenLayers.Geometry.MultiLineString'||mLayers[a].features[0].geometry.CLASS_NAME=='OpenLayers.Geometry.LineString'))
{strWidthline=SizeInputMain[i].value;}
else{strWidthline=1;}
 rulesEl[i]=
 new OpenLayers.Rule({
 title: "< 15.182 grad",
 filter: new OpenLayers.Filter.Comparison({
 type: OpenLayers.Filter.Comparison.BETWEEN,
 property: LegendFieldMain,
 upperBoundary:parseFloat(LegendValueMain[2*i+1].value),
 lowerBoundary: parseFloat(LegendValueMain[2*i].value)
 }),
 symbolizer: {
 pointRadius: SizeInputMain[i].value,
 fillColor: divPalBMain[i].style.backgroundColor,
 strokeColor: LegendStrockRMain[i].style.backgroundColor,
 strokeWidth: strWidthline,
 label:strLab
 }
 });
 
  if(labelAtrrinuteArrayMain[i].name){if(labelAtrrinuteArrayMain[i].name.length>0||labelAtrrinuteArrayMain[i].randomText==true)
{
rulesEl[i].symbolizer.fontColor=labelAtrrinuteArrayMain[i].colorlab;
rulesEl[i].symbolizer.fontSize=labelAtrrinuteArrayMain[i].fontsize+"px";
rulesEl[i].symbolizer.fontFamily=labelAtrrinuteArrayMain[i].fontFamily;
rulesEl[i].symbolizer.fontWeight=labelAtrrinuteArrayMain[i].fontWeight;
rulesEl[i].symbolizer.labelAlign=labelAtrrinuteArrayMain[i].fontAlign;
rulesEl[i].symbolizer.fontOpacity=labelAtrrinuteArrayMain[i].fontopac;
rulesEl[i].symbolizer.fontStyle=labelAtrrinuteArrayMain[i].fontStyle
rulesEl[i].symbolizer.labelOutlineColor="white";
rulesEl[i].symbolizer.labelOutlineWidth=3;
}}
 
 
if(imageMarkerArWebGis[i]!=='')
{rulesEl[i].symbolizer["externalGraphic"]=imageMarkerArWebGis[i];
if(imageMarkerArWebGisWH[i]&&(imageMarkerArWebGisWH[i].split(",")[0])){rulesEl[i].symbolizer["graphicWidth"]=parseInt(imageMarkerArWebGisWH[i].split(",")[0]);}
if(imageMarkerArWebGisWH[i]&&(imageMarkerArWebGisWH[i].split(",")[0])){rulesEl[i].symbolizer["graphicHeight"]=parseInt(imageMarkerArWebGisWH[i].split(",")[1]);}
}
 newLegendDiv+='<div id="'+mLayers[a].name+'StartLegendDivLayer'+i+'"><a>field: '+ LegendFieldMain+'</a><br><a>from:'+LegendValueMain[2*i].value+' to:'+LegendValueMain[2*i+1].value+'</a>'+
'<style type="text/css">.blockk'+mLayers[a].id.split('.')[2]+'_'+i+'{ background:'+divPalBMain[i].style.backgroundColor+'; width: 15px; height: 4px; padding: 0px; margin: 0px; border: outset 1px black;}</style> <div class=blockk'+mLayers[a].id.split('.')[2]+'_'+i+'>.</div></br></div>'
}
for(var i=0; i<=LegendTextMain.length-1; ++i) 
{

var strLab='';
var strlab1='';
var rowc='';
if(labelAtrrinuteArrayMain[i].name)
{if(labelAtrrinuteArrayMain[i].rowcol==true){rowc='\n';}
if(labelAtrrinuteArrayMain[i].name)
{
for(var z=0;z<labelAtrrinuteArrayMain[i].name.length;z++)
{
if(labelAtrrinuteArrayMain[i].ckeckname==true)
{strlab1=labelAtrrinuteArrayMain[i].name[z]+":";}
var dop='';if(z>0){dop=' ';}
strLab+=dop+strlab1+"${"+labelAtrrinuteArrayMain[i].name[z]+"}"+rowc;
}}
if(labelAtrrinuteArrayMain[i].randomText==true)
{strLab=labelAtrrinuteArrayMain[i].randomTextText;}
}
var strWidthline=1;
if(mLayers[a].features[0]&&(mLayers[a].features[0].geometry.CLASS_NAME=='OpenLayers.Geometry.MultiLineString'||mLayers[a].features[0].geometry.CLASS_NAME=='OpenLayers.Geometry.LineString'))
{strWidthline=SizeInputMain[i].value;}
else{strWidthline=1;}
 rulesEl[i]=
 new OpenLayers.Rule({
 title: "< 15.182 grad",
 filter: new OpenLayers.Filter.Comparison({
 type: OpenLayers.Filter.Comparison.EQUAL_TO,
 property: LegendFieldMain,
 value:LegendTextNameMain[i]
 }),
 symbolizer: {
 pointRadius: SizeInputMain[i].value,
 fillColor: divPalBMain[i].style.backgroundColor,
 strokeColor: LegendStrockRMain[i].style.backgroundColor,
 strokeWidth: strWidthline,
label:strLab
 }
 });
   if(labelAtrrinuteArrayMain[i].name){if(labelAtrrinuteArrayMain[i].name.length>0||labelAtrrinuteArrayMain[i].randomText==true)
{
rulesEl[i].symbolizer.fontColor=labelAtrrinuteArrayMain[i].colorlab;
rulesEl[i].symbolizer.fontSize=labelAtrrinuteArrayMain[i].fontsize+"px";
rulesEl[i].symbolizer.fontFamily=labelAtrrinuteArrayMain[i].fontFamily;
rulesEl[i].symbolizer.fontWeight=labelAtrrinuteArrayMain[i].fontWeight;
rulesEl[i].symbolizer.labelAlign=labelAtrrinuteArrayMain[i].fontAlign;
rulesEl[i].symbolizer.fontOpacity=labelAtrrinuteArrayMain[i].fontopac;
rulesEl[i].symbolizer.fontStyle=labelAtrrinuteArrayMain[i].fontStyle
rulesEl[i].symbolizer.labelOutlineColor="white";
rulesEl[i].symbolizer.labelOutlineWidth=3;
}}
 
 
 
if(imageMarkerArWebGis[i]!=='')
{rulesEl[i].symbolizer["externalGraphic"]=imageMarkerArWebGis[i];
if(imageMarkerArWebGisWH[i]&&(imageMarkerArWebGisWH[i].split(",")[0])){rulesEl[i].symbolizer["graphicWidth"]=parseInt(imageMarkerArWebGisWH[i].split(",")[0]);}
if(imageMarkerArWebGisWH[i]&&(imageMarkerArWebGisWH[i].split(",")[0])){rulesEl[i].symbolizer["graphicHeight"]=parseInt(imageMarkerArWebGisWH[i].split(",")[1]);}
}
 newLegendDiv+='<div id="'+mLayers[a].name+'StartLegendDivLayer'+i+'"><a>field: '+ LegendFieldMain+'</a><br><a>LegendTextNameMain[i]+</a>'+
'<style type="text/css">.blockk'+mLayers[a].id.split('.')[2]+'_'+i+'{ background:'+divPalBMain[i].style.backgroundColor+'; width: 15px; height: 4px; padding: 0px; margin: 0px; border: outset 1px black;}</style> <div class=blockk'+mLayers[a].id.split('.')[2]+'_'+i+'>.</div></br></div>'
}

if (window.StrokeColorLegend == undefined)
{StrokeColorLegend="#666666"}
if (window.pRadLegend == undefined)
{pRadLegend=3}
if (window.fillColorLegend == undefined)
{fillColorLegend="#FF693F"}
var strLab='';
var strlab1='';
var rowc='';
if(labelAtrrinuteMain.rowcol==true){rowc='\n';}
if(labelAtrrinuteMain.name)
{
for(var z=0;z<labelAtrrinuteMain.name.length;z++)
{
if(labelAtrrinuteMain.ckeckname==true)
{strlab1=labelAtrrinuteMain.name[z]+":";}
var dop='';if(z>0){dop=' ';}
strLab+=dop+strlab1+"${"+labelAtrrinuteMain.name[z]+"}"+rowc;
}}
if(labelAtrrinuteMain.randomText==true)
{strLab=labelAtrrinuteMain.randomTextText;}

styleN= new OpenLayers.Style({
 pointRadius: pRadLegend,
fillColor: fillColorLegend,
 strokeColor:StrokeColorLegend,
 strokeWidth: pStrokeLegend,
fillOpacity:pOpacityLegend,
 strokeOpacity:pOpacityLegend,
label:strLab
});

if(labelAtrrinuteMain.name.length>0||labelAtrrinuteMain.randomText==true)
{
styleN.defaultStyle.fontColor=labelAtrrinuteMain.colorlab;
styleN.defaultStyle.fontSize=labelAtrrinuteMain.fontsize+"px";
styleN.defaultStyle.fontFamily=labelAtrrinuteMain.fontFamily;
styleN.defaultStyle.fontWeight=labelAtrrinuteMain.fontWeight;
styleN.defaultStyle.labelAlign=labelAtrrinuteMain.fontAlign;
styleN.defaultStyle.fontOpacity=labelAtrrinuteMain.fontopac;

styleN.defaultStyle.fontStyle=labelAtrrinuteMain.fontStyle
styleN.defaultStyle.labelOutlineColor="white";
styleN.defaultStyle.labelOutlineWidth=3;
}
var styleNS= new OpenLayers.Style({fillColor:"#ffaa00",
fillOpacity:1,
pointRadius:5,
strokeColor:"#00DDFF",
strokeOpacity:1,
strokeWidth:2});
if(pLegendImageWebGis)
{styleN.defaultStyle["externalGraphic"]=pLegendImageWebGis;
styleN.defaultStyle["graphicWidth"]=pLegendImageWebGisW;
styleN.defaultStyle["graphicHeight"]=pLegendImageWebGisH;
}
if(pLegendImageWebGis)
{styleNS.defaultStyle["externalGraphic"]=pLegendImageWebGis;
styleNS.defaultStyle["graphicWidth"]=parseInt(pLegendImageWebGisW)+5;
styleNS.defaultStyle["graphicHeight"]=parseInt(pLegendImageWebGisH)+5;
}
mLayers[a].styleMap.styles.default=styleN;
mLayers[a].styleMap.styles.select=styleNS;
for (var iu=0;iu<=rulesEl.length-1;++iu)
{
mLayers[a].styleMap.styles.default.addRules([rulesEl[iu]]);}
if (mLayers[a].visibility==true)
{mLayers[a].setVisibility(false); mLayers[a].setVisibility(true);}
if (mLayers[a].visibility==false)
{mLayers[a].setVisibility(true);mLayers[a].setVisibility(false);}
*/
}
} )
///////////////}
}
function  SetCluster()
{
var bbox = document.getElementById("classnum").getBoundingClientRect();
 var body = document.body
 var docElem = document.documentElement
 var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
 var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
 var clientTop = docElem.clientTop || body.clientTop || 0
 var clientLeft = docElem.clientLeft || body.clientLeft || 0
 var topTop = bbox.top + scrollTop - clientTop
 var leftLeft = bbox.left + scrollLeft - clientLeft
var DivEditeLeg=document.createElement("div");
DivEditeLeg.id="id_divClustLegMain2";
DivEditeLeg.className="id_divClustLegMain";
DivEditeLeg.style.position="relative";
DivEditeLeg.innerHTML='<div id="id_divClustLeg" style="background:#ffffff; color:#0000ff;z-index: 300002;position:absolute;left:'+Math.round(leftLeft)+'px;top:0px;overflow:hidden; border: 1px solid black;"><img onclick="closeClusterWin()" src="/img/close.gif" style="position:relative; top:10px;float:right; cursor:pointer"><a style="position:relative; top:20px"></a>'+
'<div id="strategy-chooser">'+
'<p>Select the desired clustering strategy:'+
'</p><label><input type="radio" checked="checked" id="no-strategy" value="none" name="strategy">No strategy'+
'</label><br><label><input type="radio" id="cluster-strategy" value="cluster" name="strategy">Simple cluster-strategy'+
'</label><br><label><input type="radio" id="attributive-cluster-strategy" value="attribute-cluster" name="strategy">Attributive cluster-strategy.'+
'</label>'+
' attribute:<select id=attribClustSel>'+
'<option value="0">.</option></select>'+
'<br><label><input type="radio" id="rulebased-cluster-strategy" value="rule-cluster" name="strategy">Rulebased cluster-strategy</label>'+
'<select id=attribClustSelRul><option selected value="0">.</option><option value=">">></option>'+
'<option value="<"><</option> <option value=">=">>=</option> <option value="<="><=</option>'+
'<option value="==">=</option></select>'+
' attribute:<select id=attribClustSel2>'+
'<option value="0">.</option></select><br>'+
'value:<input id=attribClustSel2V type="text" size="10"><br>'+
'distance:<input title="Pixel distance between features that should be considered a single cluster" id=distClust type="text" value=20 size="10">'+
'</div>'+
'<button type=button onclick=OK_SetCluster()>OK</button>'+
'</div>';
if(!document.getElementById("id_divClustLegMain2"))
{body.appendChild(DivEditeLeg);

for(var ab = 0; ab < mLayers.length; ab++ )
{ 
if (mLayers[ab].name==layerLegendType)
{for (var a in mLayers[ab].features[0].attributes)
{var t=document.createElement('option');
t.value=a;t.text=a;document.getElementById("attribClustSel").appendChild(t);}
for (var a in mLayers[ab].features[0].attributes)
{var t=document.createElement('option');
t.value=a;t.text=a;document.getElementById("attribClustSel2").appendChild(t);}
} }
}

}
function OK_SetCluster()
{
OpenLayers.Strategy.AttributeCluster = OpenLayers.Class(OpenLayers.Strategy.Cluster, {
    /**
     * the attribute to use for comparison
     */
    attribute: null,
    /**
     * Method: shouldCluster
     * Determine whether to include a feature in a given cluster.
     *
     * Parameters:
     * cluster - {<OpenLayers.Feature.Vector>} A cluster.
     * feature - {<OpenLayers.Feature.Vector>} A feature.
     *
     * Returns:
     * {Boolean} The feature should be included in the cluster.
     */
    shouldCluster: function(cluster, feature) {
        var cc_attrval = cluster.cluster[0].attributes[this.attribute];
        var fc_attrval = feature.attributes[this.attribute];
        var superProto = OpenLayers.Strategy.Cluster.prototype;
        return cc_attrval === fc_attrval && 
               superProto.shouldCluster.apply(this, arguments);
    },
    CLASS_NAME: "OpenLayers.Strategy.AttributeCluster"
});

/**
 * Class: OpenLayers.Strategy.RuleCluster
 * Strategy for vector feature clustering according to a given rule.
 *
 * Inherits from:
 *  - <OpenLayers.Strategy.Cluster>
 */
OpenLayers.Strategy.RuleCluster = OpenLayers.Class(OpenLayers.Strategy.Cluster, {
    /**
     * the rule to use for comparison
     */
    rule: null,
    /**
     * Method: shouldCluster
     * Determine whether to include a feature in a given cluster.
     *
     * Parameters:
     * cluster - {<OpenLayers.Feature.Vector>} A cluster.
     * feature - {<OpenLayers.Feature.Vector>} A feature.
     *
     * Returns:
     * {Boolean} The feature should be included in the cluster.
     */
    shouldCluster: function(cluster, feature) {
        var superProto = OpenLayers.Strategy.Cluster.prototype;
        return this.rule.evaluate(cluster.cluster[0]) &&
               this.rule.evaluate(feature) &&
               superProto.shouldCluster.apply(this, arguments);
    },
    CLASS_NAME: "OpenLayers.Strategy.RuleCluster"
});
var layEdCl='';

for(var ab = 0; ab < mLayers.length; ab++ )
{ 
if (mLayers[ab].name==layerLegendType)
{layEdCl=mLayers[ab];}
}
  // the behaviour and methods for the radioboxes    
 var featuresClust=[];
for(var se=0;se<layEdCl.features.length;se++)
  {
if(layEdCl.features[se].cluster){for(var se2=0;se2<layEdCl.features[se].cluster.length;se2++){featuresClust.push(layEdCl.features[se].cluster[se2].clone());}}else{featuresClust.push(layEdCl.features[se].clone());}
}
        var strategies = [];
        // this is the checkbox
if(document.getElementById("no-strategy").checked==true)
{

}
      if(document.getElementById("cluster-strategy").checked==true)
           {                // standard clustering
var clst=new OpenLayers.Strategy.Cluster(); clst.distance=parseFloat(document.getElementById("distClust").value);
                strategies.push(clst);
               }
           if(document.getElementById("attributive-cluster-strategy").checked==true)
               { //use the custom class: only cluster features of the same clazz
var atrcl=document.getElementById("attribClustSel").value;if(document.getElementById("attribClustSel").value=='0'){alert("select all options");return;}
                strategies.push(new OpenLayers.Strategy.AttributeCluster({
                    attribute:atrcl,
                    distance:parseFloat(document.getElementById("distClust").value)
                }));
               }
            if(document.getElementById("rulebased-cluster-strategy").checked==true)
                {// use the custom class: only cluster features that have a 
                // clazz smaller than 4
var atrcl=document.getElementById("attribClustSel2").value;var typeo='';var atrclV=document.getElementById("attribClustSel2V").value;
if(document.getElementById("attribClustSelRul").value=='>')
{typeo="OpenLayers.Filter.Comparison.GREATER_THAN"; }
if(document.getElementById("attribClustSelRul").value=='<')
{ typeo="OpenLayers.Filter.Comparison.LESS_THAN";}
if(document.getElementById("attribClustSelRul").value=='>=')
{typeo="OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO"; }
if(document.getElementById("attribClustSelRul").value=='<=')
{ typeo="OpenLayers.Filter.Comparison.LESS_THAN_OR_EQUAL_TO"; }
if(document.getElementById("attribClustSelRul").value=='==')
{typeo="OpenLayers.Filter.Comparison.EQUAL_TO"; }
if(document.getElementById("attribClustSelRul").value=='0'){alert("select all options");return;}
if(document.getElementById("attribClustSel2").value=='0'){alert("select all options");return;}
                strategies.push(new OpenLayers.Strategy.RuleCluster({
                    distance:parseFloat(document.getElementById("distClust").value),
                    rule: new OpenLayers.Rule({
                        filter: new OpenLayers.Filter.Comparison({
                            type: eval(typeo),
                            property: "atrcl",
                            value: atrclV
                        })
                    })
                }));
               }
        
        // remove layer and control

        
        // rebuild layer
var new_style_layer= new OpenLayers.Style({
 pointRadius: 3, fillColor: "#FF9000",
 strokeColor: "#FF9000", strokeWidth: 1,
fillOpacity:1, strokeOpacity:1 });
 var selStyle = new OpenLayers.Style({
 pointRadius: 5,  fillColor: "#ffaa00",
 strokeColor: "#00DDFF", strokeWidth:2,
fillOpacity:1, strokeOpacity:1 }); 
        vectorlayer = new OpenLayers.Layer.Vector(layEdCl.name, {strategies: strategies,renderers:["Canvas", "SVG", "VML"]});
 vectorlayer.styleMap=new OpenLayers.StyleMap({'default':new_style_layer,'select': selStyle});
               vectorlayer.addFeatures(featuresClust);
if(vectorlayer.name==edilayerMainLayer.name)
{SeteditlayerMain(vectorlayer.name);}

}
function closeAutoLegWin()
{document.getElementById("id_divAutoLegMain2").parentNode.removeChild(document.getElementById("id_divAutoLegMain2"));}
function closeClusterWin()
{document.getElementById("id_divClustLegMain2").parentNode.removeChild(document.getElementById("id_divClustLegMain2"));}
function openlabelRuesSet(elem)
{

var bbox = elem.getBoundingClientRect();
var body = document.body
var docElem = document.documentElement
var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
var clientTop = docElem.clientTop || body.clientTop || 0
var clientLeft = docElem.clientLeft || body.clientLeft || 0
var topTop  = bbox.top +  scrollTop - clientTop
var leftLeft = bbox.left + scrollLeft - clientLeft
var DivEditeLeg=document.createElement("div");
var n=elem.id.split('_')[1];
DivEditeLeg.id="id_divLabelLegRul"+n;
//document.getElementById('blockleglabel').innerHTML
//DivEditeLeg.innerHTML='<div id="id_divColorc" style="background:#97d9e0; color:#0000ff;width:380px;z-index: 1400;height:40px;position:absolute;left:'+Math.round(leftLeft+10)+'px;top:'+Math.round(topTop+10)+
//'px;overflow:hidden; border: 1px solid black;"><img onclick="closeColor()" src="openlayers/theme/default/img/close.gif" style="position:relative; top:5px;float:right; cursor:pointer"><a style="position:relative; top:20px"></a><div id="paletteC2"></div></div>';
var strf1='"Palatino Linotype", "Book Antiqua", Palatino, serif';
var strf2='"Times New Roman", Times, serif';
var strf3='"Arial Black", Gadget, sans-serif';
var strf4='"Comic Sans MS", cursive, sans-serif';
var strf5='"Trebuchet MS", Helvetica, sans-serif';
var strf6='"Lucida Console", Monaco, monospace';
DivEditeLeg.innerHTML='<div id="blockleglabel_'+n+'" style="background:#ffffff;color:#0000ff;position:absolute;width:490px; z-index: 300002;border:1px double black;left:'+Math.round(leftLeft+10)+'px;top:'+Math.round(topTop+10)+'px"> <a>set label:</a><br>'+
'<select id="id_labelOpen_'+n+'" multiple size="3"> '+
' <option value="0">.</option></select>'+
'<a>font size:</a><input id="id_pLabelFont_'+n+'" type="text" size="5" value="12">'+
'<a>set align:</a><select id="id_labelAlign_'+n+'" >'+
'<option selected value="lt">left-top</option><option value="lm">left-middle</option><option value="lb">left-bottom</option>'+
'<option value="ct">center-top</option><option value="cm">center-middle</option><option value="cb">center-bottom</option>'+
'<option value="rt">right-top</option><option value="rm">right-middle</option><option value="rb">right-bottom</option></select>'+
'<input type="checkbox" title="if not checked then all will be written into a string" id="id_RowColomLabel_'+n+'" title="" value="checkbox" checked/><a style="font-size:10px">write in column</a><br>'+
'<input type="checkbox" title="" id="id_RandomTextLabel_'+n+'" title="" value="checkbox"/><a style="font-size:10px">arbitrary text:</a>'+
'<textarea style="width:40px;height:20px" title="insert arbitrary text for label" id="textRandomlabel_'+n+'" name="text"></textarea><br>'+
'<div style="position:relative;width:105px;"><a>color of label:</a><div title="select color of label text" id="id_ColorText1_'+n+'" onclick="clickDivColorlabel(this)"'+' style="position:relative;width:15px;height:15px;cursor:pointer;background:#bbbbbb; border:1px double black; float:right"></div></div>'+
'<input type="checkbox" id="id_CheckNameLabel_'+n+'" title="" value="checkbox" checked/><a>show name of attribute;</a><a> font opacity:</><input id="id_pLabelFontOpac_'+n+'" type="text" title="value beetwen 0 and 1" size="5" value="0.9">'+
'<a> font style:</a><select id="id_labelfontStyle_'+n+'" > '+
'<option selected value="normal">normal</option><option value="italic">italic</option><option value="oblique">oblique</option></select><br>'+
'<a> font weight:</a><select id="id_labelfontWeight_'+n+'" > '+
'<option selected value="normal">normal</option><option value="lighter">lighter</option><option value="bold">bold</option><option value="bolder">bolder</option></select><br>'+
'<a> font family:</a><select id="id_labelfontFamily_'+n+'" > '+
'<option selected value="Courier New, monospace" style="font-size:11px">Courier New, monospace</option>'+
'<option value="Georgia, serif">Georgia, serif</option>'+
"<option value='"+strf1+"'>Palatino Linotype, Book Antiqua, Palatino, serif</option>"+
"<option value='"+strf2+"'>Times New Roman, Times, serif</option>"+
'<option value="Arial, Helvetica, sans-serif">Arial, Helvetica, sans-serif</option>'+
"<option value='"+strf3+"'>Arial Black, Gadget, sans-serif</option>"+
"<option value='"+strf4+"'>Comic Sans MS, cursive, sans-serif</option>"+
'<option value="Impact, Charcoal, sans-serif">Impact, Charcoal, sans-serif</option>'+
'<option value="Tahoma, Geneva, sans-serif">Tahoma, Geneva, sans-serif</option>'+
"<option value='"+strf5+"'>Trebuchet MS, Helvetica, sans-serif</option>"+
'<option value="Verdana, Geneva, sans-serif">Verdana, Geneva, sans-serif</option>'+
"<option value='"+strf6+"'>Lucida Console, Monaco, monospace</option>"+
'</select>'+
'<p> <button id="butLabel'+n+'" type=button onclick=ArrayLabelRules()>OK</button></p>'+
'</div>';

//DivEditeLeg.innerHTML=document.getElementById('blockleglabel').parentNode.innerHTML;
if(!document.getElementById("id_divLabelLegRul"+n))
{body.appendChild(DivEditeLeg);}
document.getElementById("id_divLabelLegRul"+n).style.display="block";
document.getElementById("butLabel"+n).onclick=function(){ArrayLabelRules(elem)}

for(var ab = 0; ab < mLayers.length; ab++ )
{  if (mLayers[ab].name==layerLegendType)
{for (var a in mLayers[ab].features[0].attributes)
{var t=document.createElement('option');
t.value=a;t.text=a;
document.getElementById("id_labelOpen_"+n).appendChild(t);}}
}
}
function ArrayLabelRules(elem)
{var n=elem.id.split('_')[1];
labelAtrrinute1={};labelAtrrinute1.value='';LegendLabelObj[n]={};labelAtrrinute1.colorlab=document.getElementById("id_ColorText1_"+n).tempColorGIS;labelAtrrinute1.fontsize=document.getElementById("id_pLabelFont_"+n).value;
labelAtrrinute1.fontopac=document.getElementById("id_pLabelFontOpac_"+n).value;labelAtrrinute1.fontWeight=document.getElementById("id_labelfontWeight_"+n).value;
labelAtrrinute1.fontFamily=document.getElementById("id_labelfontFamily_"+n).value;

if(document.getElementById("id_RowColomLabel_"+n).checked==true){labelAtrrinute1.rowcol=true;}
if(document.getElementById("id_RowColomLabel_"+n).checked==false){labelAtrrinute1.rowcol=false;}

if(document.getElementById("id_RandomTextLabel_"+n).checked==true){labelAtrrinute1.randomText=true;}
if(document.getElementById("id_RandomTextLabel_"+n).checked==false){labelAtrrinute1.randomText=false;}
labelAtrrinute1.randomTextText=document.getElementById("textRandomlabel_"+n).value;
labelAtrrinute1.fontStyle=document.getElementById("id_labelfontStyle_"+n).value;
if(document.getElementById("id_CheckNameLabel_"+n).checked==true){labelAtrrinute1.ckeckname=true;}
if(document.getElementById("id_CheckNameLabel_"+n).checked==false){labelAtrrinute1.ckeckname=false;}
labelAtrrinute1.fontAlign=document.getElementById("id_labelAlign_"+n).value;
var o=document.getElementById("id_labelOpen_"+n);
var selectedOptions = [];
for (var i = 0; i < o.options.length; i++){ if (o.options[i].selected) {selectedOptions.push(o.options[i].value);}}
var labelYes=true;
if(selectedOptions.length>0)
{if(selectedOptions.length==1&&selectedOptions[0]=='0'){labelYes=false}}
if(selectedOptions.length==0)
{labelYes=false}
//alert("fghj");
labelAtrrinute1.name=[];

if(labelYes==true)
{for(var tzz=0;tzz<selectedOptions.length;tzz++)
{labelAtrrinute1.name.push(selectedOptions[tzz]);}
}
LegendLabelObj[n]=labelAtrrinute1;
document.getElementById("id_divLabelLegRul"+n).style.display="none";

}
function clickDivColorlabel(elem)
{


var bbox = elem.getBoundingClientRect();
var body = document.body
var docElem = document.documentElement
var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
var clientTop = docElem.clientTop || body.clientTop || 0
var clientLeft = docElem.clientLeft || body.clientLeft || 0
var topTop  = bbox.top +  scrollTop - clientTop
var leftLeft = bbox.left + scrollLeft - clientLeft
var DivEditeLeg=document.createElement("div");
DivEditeLeg.id="id_divEditeLegColor";
DivEditeLeg.innerHTML='<div id="id_divColorc" style="background:#97d9e0; color:#0000ff;width:384px;z-index: 300002;height:40px;position:absolute;left:'+Math.round(leftLeft+10)+'px;top:'+Math.round(topTop+10)+
'px;overflow:hidden; border: 1px solid black;"><img onclick="closeColor()" src="img/close.gif" style="position:relative; top:5px;float:right; cursor:pointer"><a style="position:relative; top:20px"></a><div id="paletteC2s"></div></div>';
if(!document.getElementById("id_divEditeLegColor"))
{body.appendChild(DivEditeLeg);drawPalette2(elem); }

}
function closeColor()
{if(document.getElementById('id_divEditeLegColor'))
{document.getElementById('id_divEditeLegColor').parentNode.removeChild(document.getElementById('id_divEditeLegColor'));}
}
/*function drawPalette2(elem) {var out = "";
for (var i = 0; i < 360; i++) {
out += "<div id='id_palettcolortable_"+i+"' onclick='selectColor(this);' style='background-color:" + HSLToRGB(i, 100, 100) + "'><\/div>";}
out += "<div id='id_palettcolortable_360' onclick='selectColor(this);' style='background-color:#FFFFFF;width:2px;'><\/div>";
out += "<div id='id_palettcolortable_361' onclick='selectColor(this);' style='background-color:#000000;width:2px;'><\/div>";
document.getElementById("paletteC2s").innerHTML = out;
for(var i = 0; i < 362; i++)
{document.getElementById("id_palettcolortable_"+i).onclick=function(){var nelem=elem;selectColor2(this,nelem);}}
}
function selectColor2(div,nelem) {
colorElemWin = div.style.backgroundColor;
colorElemWin = rgbNormal(colorElemWin);
nelem.style.background=colorElemWin; 
nelem.tempColorGIS=colorElemWin;
}*/



function setField()
{document.getElementById("classfield").style.display="block";

//Clear select list
    var seldel = document.getElementById("pField");
         while (seldel.childNodes.length) {
    if (seldel.firstChild.tagName == 'OPTGROUP') {
    while (seldel.firstChild.childNodes.length) {
    seldel.firstChild.removeChild(seldel.firstChild.firstChild);
    }
    }
    seldel.removeChild(seldel.firstChild);
    }
 var t=document.createElement('option');
t.value="0";
t.text=" ";
document.getElementById("pField").appendChild(t);
////end clear select list

var WFSLayerList;


         for(var ab = 0; ab < mLayers.length; ab++ )
             { 
 if (mLayers[ab].name==layerLegendType)
                {
for (var a in mLayers[ab].features[0].attributes)
              {var t=document.createElement('option');
               t.value=a;
               t.text=a;
            document.getElementById("pField").appendChild(t);}
}
}



     
  // alert('attribute is named ' + featureTypes2[0].properties[i].name);
       // alert('attribute is of type ' + featureTypes2[0].properties[i].type);
    //}





var flag=0;

         for(var ab = 0; ab < mLayers.length; ab++ )
             { 
   if(mLayers[ab].protocol)
 {
                if (mLayers[ab].protocol.featureType==layerLegendType)
                {
  for (var a in mLayers[ab].features[0].attributes)
              {
             for (var y=0; y<document.getElementById("pField").length;y++)
              { if (document.getElementById("pField").options[y].value==a){flag=1;}}
            if(flag==0)  
             {var t=document.createElement('option');
               t.value=a;
               t.text=a;
            document.getElementById("pField").appendChild(t);}flag=0;}
                 
              } //end  if (mLayers[ab].protocol.featureType==layerLegendType)
      }// end   if(mLayers[ab].protocol.featureType)
          } /// end for


}//////end set fields
function readSingleFileImg(evt)
{
fileZIPl = evt.target.files[0]; 
}
function readSingleFileImg2(evt)
{
v=evt.target.parentNode.parentNode.className.split('_')[1];
fileZIP2l[v]=evt.target.files[0];

}
function OK_automaticLegend()
{if(document.getElementById("pField").value==0){alert("Please, select name of the field"); return;}
var bbox = document.getElementById("classnum").getBoundingClientRect();
 var body = document.body
 var docElem = document.documentElement
 var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
 var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
 var clientTop = docElem.clientTop || body.clientTop || 0
 var clientLeft = docElem.clientLeft || body.clientLeft || 0
 var topTop = bbox.top + scrollTop - clientTop
 var leftLeft = bbox.left + scrollLeft - clientLeft
var DivEditeLeg=document.createElement("div");
DivEditeLeg.id="id_divAutoLegMain2";
DivEditeLeg.className="id_divAutoLegMain";
DivEditeLeg.style.position="absolute";DivEditeLeg.style.top="60px";
DivEditeLeg.innerHTML='<div id="id_divClustLeg" style="background:#ffffff; color:#0000ff;z-index: 300002;position:absolute;left:'+Math.round(leftLeft+200)+'px;top:0px;overflow:hidden; border: 1px solid black;"><a>set parameters:</a><img onclick="closeAutoLegWin()" src="img/close.gif" style="position:relative; top:3px;float:right; cursor:pointer"><a style="position:relative; top:20px"></a><br>'+
'interval of values: from <input id=idAutoVal1 type="text" size="5"> to <input id=idAutoVal2 type="text" size="5"><br>'+
'size(radius) for points or width for lines from: <input id=idAutoVal11 type="text" size="5" value="3"> by <input id=idAutoVal22 type="text" size="3" value="2" title="for each legend class size will be increased by this value">pixels<br><div id="colorautolegeng_id"></div>'+
'<a href="https://en.wikipedia.org/wiki/RGB_color_model" target="_blank">Interval of Colors:</a><input title="Insert the number to get the interval of colors (in RGB format) for segmentation of Image Layer.&#013;For example, if selected color has value of red, green, and blue channels is equivalent to 230 and you have inserted 10 in this box, then set of colors, which will be set in legend, &#013; will be within the interval from 220 to 240. To see this interval of colors, click on the button /refresh/." type="text" id="VectorIm_colInt_id" value="170" size=3>'+'<button type=button onclick=OK_ColorAutoRefresh()>refresh</button>'+
'<div id="id_coloaddIm2" ></div><br>'+
'<button type=button onclick= OK_automaticLegend2()>OK</button>'+
'</div>';
if(!document.getElementById("id_divAutoLegMain2"))
{body.appendChild(DivEditeLeg);
document.getElementById("idAutoVal1").value=document.getElementById("MinimumValueLayer").innerHTML.split("Minimum:")[1];
document.getElementById("idAutoVal2").value=document.getElementById("MaximumValueLayer").innerHTML.split("Maximum:")[1];
var out = "";
for (var ii = 0; ii < 360; ii++) 
{out += "<div onclick='selectColorIndexAuto(this);' style='width:1px; height:20px; float:left; background-color:" + HSLToRGB(ii, 100, 100) + "'><\/div>";}
out += "<div onclick='selectColorIndexAuto(this);' style='height:20px; float:left; background-color:#FFFFFF;width:2px;'><\/div>";
out += "<div onclick='selectColorIndexAuto(this);' style='height:20px; float:left; background-color:#000000;width:2px;'><\/div>";
divColeg=document.createElement('div');
divColeg.style.width="364px"; divColeg.style.height="20px";
divColeg.innerHTML = out;
divColeg.id="divColeg"+0;

document.getElementById("colorautolegeng_id").appendChild(divColeg);
divPalCo=document.createElement('div');divPalCo.style.background="#ccc";divPalCo.id="divPalCo_id"
divPalCo.style.width="25px"; divPalCo.style.height="20px";divPalCo.style.cssFloat="left";
divPalCo.style.border="solid 1px black";

divPalCohc=document.createElement('input');divPalCohc.type="text";divPalCohc.id="blockCtColor_id";divPalCohc.size="5";divPalCohc.style="float:left;border: solid 1px black;";
divPalCohci=document.createElement('input');divPalCohci.type="checkbox";divPalCohci.id="blockCtColori_id";divPalCohci.style="border: solid 1px black;";
divPalCohcia=document.createElement('a');divPalCohcia.id="blockCtColoria_id";divPalCohcia.style="border: solid 1px black;";divPalCohcia.innerHTML='invert colors';
divPalCohc.value="#0000FF";divPalCohc.title="insert color in hexadecimal format. For example: #00FFFF";
divPalCohcb=document.createElement('button');divPalCohcb.type="button";divPalCohcb.onclick=function(){OK_CustColor_id();};divPalCohcb.style="font-size: 10px;"
divPalCohcb.innerHTML = "Apply";divPalCohcb.title="Insert color in hexadecimal format. For example: #00FFFF. Then press 'Apply', after that press button 'OK' to view the result ";

var br335=document.createElement('br');
//document.getElementById("colorautolegeng_id").appendChild(br335);
document.getElementById("colorautolegeng_id").appendChild(divPalCo);
document.getElementById("colorautolegeng_id").appendChild(divPalCohc);
document.getElementById("colorautolegeng_id").appendChild(divPalCohcb);
document.getElementById("colorautolegeng_id").appendChild(divPalCohci);
document.getElementById("colorautolegeng_id").appendChild(divPalCohcia);

//var br333=document.createElement('br');
}

}
function OK_CustColor_id()
{document.getElementById("divPalCo_id").style.background=document.getElementById("blockCtColor_id").value; }
function OK_ColorAutoRefresh()
{for(var i=0;i<document.getElementById('id_coloaddIm2').children.length;i++){document.getElementById('id_coloaddIm2').removeChild(document.getElementById('id_coloaddIm2').children[i]);i--;}
var imcolor=document.getElementById("divPalCo_id").style.backgroundColor;
imcolor=imcolor.split("rgb(")[1].split(")")[0];
imcolor=imcolor.split(",");imcolor[0]=parseInt(imcolor[0]);imcolor[1]=parseInt(imcolor[1]);imcolor[2]=parseInt(imcolor[2]);
var pr=(-1)*parseInt(document.getElementById("VectorIm_colInt_id").value);
while(pr!==Math.abs(pr))
{var c1m=imcolor[0]+pr;var c2m=imcolor[1]+pr;var c3m=imcolor[2]+pr;
var nd=document.createElement("div");nd.style.width=2;nd.style.height=20;nd.style.background="rgba("+c1m+","+c2m+","+c3m+","+"1)";nd.style.cssFloat="left";
document.getElementById("id_coloaddIm2").appendChild(nd);pr++;
}
}
function OK_automaticLegend2()
{ var a0=parseFloat(document.getElementById("idAutoVal1").value);var ind=(parseInt(document.getElementById("pClass").value)+1)*2;
for (var i=0;i<ind;i++)
{var a=(parseFloat(document.getElementById("idAutoVal2").value)-parseFloat(document.getElementById("idAutoVal1").value))/(parseInt(document.getElementById("pClass").value)+1); 

document.getElementById(" LegendValue"+i).value=a0+i*a;
if(i>1)
{if(i%2==0){document.getElementById(" LegendValue"+i).value=document.getElementById(" LegendValue"+parseInt(i-1)).value;}
else{document.getElementById(" LegendValue"+i).value=parseFloat(document.getElementById(" LegendValue"+parseInt(i-1)).value)+a;}
}
}
var ind2=(parseInt(document.getElementById("pClass").value)+1);var a00=parseFloat(document.getElementById("idAutoVal11").value);
for (var i=0;i<ind2;i++)
{
if(i==0)
{document.getElementById("SizeInput"+i).value=document.getElementById("idAutoVal11").value;}
else{
a00=parseInt(a00)+parseInt(document.getElementById("idAutoVal22").value)
document.getElementById("SizeInput"+i).value=a00;
} }
var imcolor=document.getElementById("divPalCo_id").style.backgroundColor;
imcolor=imcolor.split("rgb(")[1].split(")")[0];
imcolor=imcolor.split(",");imcolor[0]=parseInt(imcolor[0]);imcolor[1]=parseInt(imcolor[1]);imcolor[2]=parseInt(imcolor[2]);
var pr=(-1)*parseInt(document.getElementById("VectorIm_colInt_id").value);
var c1mn=imcolor[0];var c2mn=imcolor[1];var c3mn=imcolor[2];
 if(document.getElementById("blockCtColori_id").checked==false)
{
for (var i=0;i<ind2;i++)
{

if(i==0)
{var c1m=imcolor[0]-1;var c2m=imcolor[1]-1;var c3m=imcolor[2]-1;document.getElementById("divPalB"+i).style.background="rgba("+c1m+","+c2m+","+c3m+","+"1)";document.getElementById("StrockRMarkerAr_"+i).style.background="rgba("+c1m+","+c2m+","+c3m+","+"1)";}
if(i==ind2-1)
{var c1m=imcolor[0]+pr;var c2m=imcolor[1]+pr;var c3m=imcolor[2]+pr;document.getElementById("divPalB"+i).style.background="rgba("+c1m+","+c2m+","+c3m+","+"1)";document.getElementById("StrockRMarkerAr_"+i).style.background="rgba("+c1m+","+c2m+","+c3m+","+"1)";}
if(i!==0&&i!==ind2-1)
{
c1mn=c1mn+Math.round(pr/ind2);c2mn=c2mn+Math.round(pr/ind2);c3mn=c3mn+Math.round(pr/ind2);
document.getElementById("divPalB"+i).style.background="rgba("+c1mn+","+c2mn+","+c3mn+","+"1)";
document.getElementById("StrockRMarkerAr_"+i).style.background="rgba("+c1mn+","+c2mn+","+c3mn+","+"1)";
 }

} }
 if(document.getElementById("blockCtColori_id").checked==true)
{for (var i=ind2-1;i>=0;i--)
{
if(i==ind2)
{var c1m=imcolor[0]-1;var c2m=imcolor[1]-1;var c3m=imcolor[2]-1;document.getElementById("divPalB"+i).style.background="rgba("+c1m+","+c2m+","+c3m+","+"1)";document.getElementById("StrockRMarkerAr_"+i).style.background="rgba("+c1m+","+c2m+","+c3m+","+"1)";}
if(i==1)
{var c1m=imcolor[0]+pr;var c2m=imcolor[1]+pr;var c3m=imcolor[2]+pr;document.getElementById("divPalB"+i).style.background="rgba("+c1m+","+c2m+","+c3m+","+"1)";document.getElementById("StrockRMarkerAr_"+i).style.background="rgba("+c1m+","+c2m+","+c3m+","+"1)";}
if(i!==ind2&&i!==1)
{
c1mn=c1mn+Math.round(pr/ind2);c2mn=c2mn+Math.round(pr/ind2);c3mn=c3mn+Math.round(pr/ind2);
document.getElementById("divPalB"+i).style.background="rgba("+c1mn+","+c2mn+","+c3mn+","+"1)";
document.getElementById("StrockRMarkerAr_"+i).style.background="rgba("+c1mn+","+c2mn+","+c3mn+","+"1)";
 }

} }
}
function setRules()
{
document.getElementById("classRules").style.display="block";
///clear rules div
var seldel = document.getElementById("classRules");
         while (seldel.childNodes.length) {
    if (seldel.firstChild.tagName == 'OPTGROUP') {
    while (seldel.firstChild.childNodes.length) {
    seldel.firstChild.removeChild(seldel.firstChild.firstChild);
    }
    }
    seldel.removeChild(seldel.firstChild);
    }

////

//for TEXT field

         for(var ab = 0; ab < mLayers.length; ab++ )
             { 
                if (mLayers[ab].name==layerLegendType)
                {


if(isNaN(parseFloat(mLayers[ab].features[0].attributes[document.getElementById("pField").value]))==true)
{

//unic value
var obj = {};
   for(var g=0; g<mLayers[ab].features.length; g++) {
   str= mLayers[ab].features[g].attributes[document.getElementById("pField").value];
    obj[str] = true; // 
  }
rtt=obj;
var count1=0;
for(h in obj)
{count1++;}
var v=0;
// for(var i=0; i<=count1; ++i) 
for(h in obj)
{  
LegentTextName[v]=h;
LegendText[v]=v;
fileZIP2l[v]='';
/*if(count1==1)
{ 

if (i==0){LegendValue[i].title="Less then or equal to";}
if (i==count){LegendValue[i].title="Greater then ";}
}*/
var ta=document.createElement('a');  
ta.innerHTML="size "+v;
 SizeInput[v]=document.createElement('input');
 SizeInput[v].id= "SizeInput"+[i];
SizeInput[v].value="1"
SizeInput[v].style.width="50px";
document.getElementById("classRules").appendChild(ta);
document.getElementById("classRules").appendChild(SizeInput[v]);
var br33=document.createElement('br');
document.getElementById("classRules").appendChild(br33);

imageMarkerAr[v]=document.createElement('div');
imageMarkerAr[v].id="imageMarkerAr_"+v;
imageMarkerAr[v].style.width="67px";
imageMarkerAr[v].style.height="20px";
imageMarkerAr[v].style.background="#0000ff";
imageMarkerAr[v].style.cursor="pointer";
imageMarkerAr[v].style.position="relative";
imageMarkerAr[v].style.left="-139px";imageMarkerAr[v].style.cssFloat="right";
imageMarkerAr[v].title="click to set marker";
imageMarkerAr[v].onclick=function(){addtableimage(this)};
imageMarkerAr[v].style.opacity="0.5";

document.getElementById("classRules").appendChild(imageMarkerAr[v]);
LegendLabel[v]=document.createElement('a');
LegendLabel[v].id="LabelMarkerAr_"+v;
LegendLabel[v].innerHTML="set label"
LegendLabel[v].title="set label";
LegendLabel[v].style.cursor="pointer";
LegendLabel[v].onclick=function(){openlabelRuesSet(this)};
var Labelobj1={};
LegendLabelObj.push(Labelobj1);
document.getElementById("classRules").appendChild(LegendLabel[v]);

LegendMarker[v]=document.createElement('a');
LegendMarker[v].id="LabelMarkerAr2_"+v;
LegendMarker[v].innerHTML=" set marker"
LegendMarker[v].title="click to set marker";
LegendMarker[v].style.cursor="pointer";
document.getElementById("classRules").appendChild(LegendMarker[v]);


LegendStrockR[v]=document.createElement('div');
LegendStrockR[v].id="StrockRMarkerAr_"+v;
LegendStrockR[v].style.background="#ccc";
 LegendStrockR[v].style.width="25px"; LegendStrockR[v].style.height="10px";
LegendStrockR[v].style.border="solid 1px black";
LegendStrockR[v].title="set stroke color";
LegendStrockR[v].style.cursor="pointer";
LegendStrockR[v].style.cssFloat="right";
document.getElementById("classRules").appendChild(LegendStrockR[v]);
LegendStrockR[v].onclick=function(){clickDivColorlabel(this)};

rtt=imageMarkerAr[v];
document.getElementById("classRules").appendChild(br33);


var ta3=document.createElement('a');  
ta3.innerHTML=h;
document.getElementById("classRules").appendChild(ta3);

var br33=document.createElement('br');
document.getElementById("classRules").appendChild(br33);



 var ta2=document.createElement('a');  
ta2.innerHTML="fillColor ";
document.getElementById("classRules").appendChild(ta2);

var out = "";
for (var ii = 0; ii < 360; ii++) {
out += "<div onclick='selectColorIndex(this);' style='width:1px; height:20px; float:left; background-color:" + HSLToRGB(ii, 100, 100) + "'><\/div>";
}
out += "<div onclick='selectColorIndex(this);' style='height:20px; float:left; background-color:#FFFFFF;width:2px;'><\/div>";
out += "<div onclick='selectColorIndex(this);' style='height:20px; float:left; background-color:#000000;width:2px;'><\/div>";

var br333=document.createElement('br');
document.getElementById("classRules").appendChild(br333);
divPal[v]=document.createElement('div');
divPal[v].style.width="364px"; divPal[v].style.height="20px";
divPal[v].innerHTML = out;
divPal[v].id="divPal"+h;

document.getElementById("classRules").appendChild(divPal[v]);


divPalB[v]=document.createElement('div');
divPalB[v].id="divPalB"+v;

divPalB[v].style.background="#ccc";
 divPalB[v].style.width="25px"; divPalB[v].style.height="4px";
divPalB[v].style.border="solid 1px black";
document.getElementById("classRules").appendChild(divPalB[v]);
var br335=document.createElement('br');
document.getElementById("classRules").appendChild(br335);
v++;
}




return;
             }
}
}
////////////////////end FOR TEXT FIELD

var count=document.getElementById("pClass").value;

document.getElementById("classMinMax").style.display="block";


//var WFSLayerList22;

var minDist;
var maxDist;

/////////////////////

         for(var ab = 0; ab < mLayers.length; ab++ )
             { 
   if(mLayers[ab].protocol)
 {
                if (mLayers[ab].protocol.featureType==layerLegendType)
                {
var tt=  document.getElementById("pField").value;

var DistArr=[];
 for (var i=0; i <mLayers[ab].features.length; i++)
{
 for (var a in mLayers[ab].features[i].attributes)
{if(a==tt&&mLayers[ab].features[i].attributes[a]!='') {  DistArr.push(parseFloat(mLayers[ab].features[i].attributes[a]));} }

}

 minDist = parseFloat(DistArr[0]);
            maxDist = parseFloat(minDist) ;
           for (i = 1; i <  DistArr.length; ++i) {
           if (DistArr[i] > parseFloat(maxDist) ) maxDist =  parseFloat(DistArr[i]);
           if( DistArr[i] < parseFloat(minDist) ) minDist  = parseFloat(DistArr[i]);
          }


////
     }
  }
else{         if (mLayers[ab].name==layerLegendType)
                {var DistArr=[];var tt=  document.getElementById("pField").value;
                             for (var i=0; i <mLayers[ab].features.length; i++)
{
 for (var a in mLayers[ab].features[i].attributes)
{if(a==tt&&mLayers[ab].features[i].attributes[a]!='') {  DistArr.push(parseFloat(mLayers[ab].features[i].attributes[a]));} }

}
minDist = parseFloat(DistArr[0]);
            maxDist = parseFloat(minDist) ;
           for (i = 1; i <  DistArr.length; ++i) {
           if (DistArr[i] > parseFloat(maxDist) ) maxDist =  parseFloat(DistArr[i]);
           if( DistArr[i] < parseFloat(minDist) ) minDist  = parseFloat(DistArr[i]);
          }
rtt=DistArr;
                             
                                    }
                            }// end else
}
///////////////////////////
//end else if(arrFeatures[0])

minValue=minDist;maxValue=maxDist;
document.getElementById("MinimumValueLayer").innerHTML="Minimum:"+minValue;
document.getElementById("MaximumValueLayer").innerHTML="Maximum:"+maxValue;



 



 for(var i=0; i<=count; ++i) 
{divPal[i]='divPal'+i;}

for(var i=0; i<=count; ++i) 
{divPalB[i]='divPalB'+i;}

for(var i=0; i<=count; ++i) 
{LegendIndex[i]='LegendIndex'+i;}

for(var i=0; i<=count; ++i) 
{SizeInput[i]='SizeInput'+i;}
if(count!=1)
{
for(var i=0; i<=count*2; ++i) 
{LegendValue[i]='LegendValue'+i;}
}

 for(var i=0; i<=count; ++i) 
{ 
fileZIP2l[i]=''; 
 var ta=document.createElement('a');  
ta.innerHTML="size "+i;
 SizeInput[i]=document.createElement('input');
 SizeInput[i].id= "SizeInput"+[i];
SizeInput[i].value="1"
SizeInput[i].style.width="50px";
LegendValue[i+i]=document.createElement('input');
LegendValue[i+i].style.width="50px";
 LegendValue[i+i].id= " LegendValue"+[i+i];


LegendValue[i+i+1]=document.createElement('input');
LegendValue[i+i+1].style.width="50px";
 LegendValue[i+i+1].id= " LegendValue"+[i+i+1];

 //alert("count "+count);

if(count==1)
{ 

if (i==0){LegendValue[i].title="Less then or equal to";}
if (i==count){LegendValue[i].title="Greater then ";}
}

 var brN=document.createElement('br');
document.getElementById("classRules").appendChild(ta);
document.getElementById("classRules").appendChild(SizeInput[i]);
imageMarkerAr[i]=document.createElement('div');

imageMarkerAr[i].id="imageMarkerAr_"+i;
imageMarkerAr[i].style.width="67px";
imageMarkerAr[i].style.height="20px";
imageMarkerAr[i].style.background="#0000ff";
imageMarkerAr[i].style.cursor="pointer";
imageMarkerAr[i].style.position="relative";
imageMarkerAr[i].style.left="-139px";imageMarkerAr[i].style.cssFloat="right";
imageMarkerAr[i].title="click to set marker";
imageMarkerAr[i].onclick=function(){addtableimage(this)};
imageMarkerAr[i].style.opacity="0.5";

document.getElementById("classRules").appendChild(imageMarkerAr[i]);

LegendLabel[i]=document.createElement('a');
LegendLabel[i].id="LabelMarkerAr_"+i;
LegendLabel[i].innerHTML="set label"
LegendLabel[i].title="set label.Please click to open popup window";
LegendLabel[i].style.cursor="pointer";
LegendLabel[i].onclick=function(){openlabelRuesSet(this)};
var Labelobj1={};
LegendLabelObj.push(Labelobj1);
document.getElementById("classRules").appendChild(LegendLabel[i]);

LegendMarker[i]=document.createElement('a');
LegendMarker[i].id="LabelMarkerAr2_"+i;
LegendMarker[i].innerHTML=" set marker"
LegendMarker[i].title="click to set marker";
LegendMarker[i].style.cursor="pointer";
document.getElementById("classRules").appendChild(LegendMarker[i]);

LegendStrockR[i]=document.createElement('div');
LegendStrockR[i].id="StrockRMarkerAr_"+i;
LegendStrockR[i].style.background="#ccc";
 LegendStrockR[i].style.width="25px"; LegendStrockR[i].style.height="10px";
LegendStrockR[i].style.border="solid 1px black";
LegendStrockR[i].title="set stroke color";
LegendStrockR[i].style.cursor="pointer";
LegendStrockR[i].style.cssFloat="right";



LegendStrockR[i].onclick=function(){clickDivColorlabel(this)};
document.getElementById("classRules").appendChild(LegendStrockR[i]);
document.getElementById("classRules").appendChild(brN);

document.getElementById("classRules").appendChild(brN);



var ta3=document.createElement('a');  
ta3.innerHTML="value "+2*i;
document.getElementById("classRules").appendChild(ta3);
document.getElementById("classRules").appendChild(LegendValue[i+i]);



var ta4=document.createElement('a');  
ta4.innerHTML="value "+(2*i+1);
document.getElementById("classRules").appendChild(ta4);
//document.getElementById("classRules").appendChild(br);

document.getElementById("classRules").appendChild(LegendValue[i+i+1]);
var br33=document.createElement('br');
document.getElementById("classRules").appendChild(br33);


 var ta2=document.createElement('a');  
ta2.innerHTML="fillColor "+i;
document.getElementById("classRules").appendChild(ta2);

var out = "";
	for (var ii = 0; ii < 360; ii++) {
out += "<div onclick='selectColorIndex(this);' style='width:1px; height:20px; float:left; background-color:" + HSLToRGB(ii, 100, 100) + "'><\/div>";
}
out += "<div onclick='selectColorIndex(this);' style='height:20px; float:left; background-color:#FFFFFF;width:2px;'><\/div>";
out += "<div onclick='selectColorIndex(this);' style='height:20px; float:left; background-color:#000000;width:2px;'><\/div>";


var br333=document.createElement('br');
document.getElementById("classRules").appendChild(br333);
divPal[i]=document.createElement('div');
divPal[i].style.width="364px"; divPal[i].style.height="20px";
divPal[i].innerHTML = out;
divPal[i].id="divPal"+[i];


//divPal2.innerHTML=out;
//divPal.appendChild(divPal2);
//document.getElementById("classRules").appendChild(paletteCs);
document.getElementById("classRules").appendChild(divPal[i]);


divPalB[i]=document.createElement('div');
divPalB[i].id="divPalB"+[i];

divPalB[i].style.background="#ccc";
 divPalB[i].style.width="25px"; divPalB[i].style.height="4px";
divPalB[i].style.border="solid 1px black";
document.getElementById("classRules").appendChild(divPalB[i]);
var br335=document.createElement('br');
document.getElementById("classRules").appendChild(br335);


}


}


function addtableimage(e)
{ var td=e; 
var bbox = e.getBoundingClientRect();
 var body = document.body
 var docElem = document.documentElement
 var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
 var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
 var clientTop = docElem.clientTop || body.clientTop || 0
 var clientLeft = docElem.clientLeft || body.clientLeft || 0
 var topTop = bbox.top + scrollTop - clientTop
 var leftLeft = bbox.left + scrollLeft - clientLeft
var DivEditeLeg=document.createElement("div");
DivEditeLeg.id="id_divTableImage";
//DivEditeLeg.onmousedown=function(event){drags(event)};
//DivEditeLeg.onmouseup=function(e){enddrag()};
DivEditeLeg.className=e.id;
DivEditeLeg.style.position="absolute";
DivEditeLeg.style.top="0px";

DivEditeLeg.innerHTML='<div id="id_divTableImageLegs" style="background:#ffffff; color:#0000ff;z-index: 300002;position:absolute;left:'+Math.round(leftLeft+20)+'px;top:'+Math.round(topTop-10)+
'px;overflow:hidden; border: 1px solid black;"><img onclick="closeTableImageWin()" src="img/close.gif" style="position:relative; top:10px;float:right; cursor:pointer"><a style="position:relative; top:20px"><br>'+
'<a>Select image file:</a><br>'+
'<input title="Select image file from your computer" style="color:transparent" type="file" id="file_idImageTable"><input type="checkbox" id="id_imageTableUpload" value="checkbox"/>Upload image to OpenWebGIS'+'<br>'+
'Or insert URL of image:<textarea id="id_imageTableTextArea" style="width: 250px; height: 20px;font-size:11px"></textarea><br>'+
//'Or insert URL of Video:<textarea id="id_VideoTableTextArea" value="" style="width: 250px; height: 20px;font-size:11px"></textarea><br>'+
'<a>width:</a><input type="text" size="5" id="id_imageTableWidth" value="50"/><br>'+
'<a>height:</a><input type="text" size="5" id="id_imageTableHeight" value="50"/><br>'+
'<input style="display:none" type="checkbox" id="id_imageTableorSize"  onchange="" value="checkbox"/>Leave original size<br>'+
'<p> <button type=button id= "id_OK_ImageTable" onclick=OK_ImageTable()>OK</button></p>';
'</div>';
if(!document.getElementById("id_divTableImageLegs"))
{body.appendChild(DivEditeLeg); }
document.getElementById('file_idImageTable').addEventListener('change', readSingleFileImg2, false);
document.getElementById('id_OK_ImageTable').onclick=function(){OK_ImageTable(td);}
}
function closeTableImageWin()
{document.getElementById("id_divTableImage").parentNode.removeChild(document.getElementById("id_divTableImage"));}

function OK_ImageTable(td)
{
var v=td.id.split('_')[1];
var fileZIP3=fileZIP2l[v] 

var w=document.getElementById("id_imageTableWidth").value; var h=document.getElementById("id_imageTableHeight").value;
imageMarkerWH[v]=w+","+h;
var myUrl0='';
myUrl=document.getElementById("id_imageTableTextArea").value; 

if(myUrl.length==0)
{
var contents;
 if (fileZIP3) {
 var r = new FileReader();
 r.onload = function(e) { contents = e.target.result;
 if(document.getElementById('id_imageTableorSize').checked==true)
 {var imgN=document.createElement("img");
 imgN.src=contents;w=imgN.width; h=imgN.height;}
  if(document.getElementById('id_imageTableUpload').checked==true)
 { if(fileZIP3.size>8000000){alert("size of the file could not be more than 8 MB"); return;}
 try {var xmlhttp =new XMLHttpRequest();}
catch (e) {alert("error");}
xmlhttp.open('POST','/image.php?rand='+Math.random(), true);
xmlhttp.setRequestHeader("Cache-Control", "no-cache"); xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xmlhttp.onreadystatechange = function(){if(xmlhttp.readyState == 4&&xmlhttp.status == 200) {
if(xmlhttp==''){alert("no data");return;}
fileZIP2l[v]=window.location.origin+"/images/"+xmlhttp.responseText;}}

{return;xmlhttp.send('value='+contents+'&name='+fileZIP2l[v].name);} }
 else{}
closeTableImageWin();
 } 
 r.readAsDataURL(fileZIP2l[v]); } else {  if (AndroidfileZIP!==''){ if(document.getElementById('id_imageTableorSize').checked==true)
 {var imgN=document.createElement("img");
 imgN.src=AndroidfileZIP;w=imgN.width; h=imgN.height;}
  if(document.getElementById('id_imageTableUpload').checked==true)
 { if(fileZIP3.size>8000000){alert("size of the file could not be more than 8 MB"); return;}
 try {var xmlhttp =new XMLHttpRequest();}
catch (e) {alert("error");}
xmlhttp.open('POST','/image.php?rand='+Math.random(), true);
xmlhttp.setRequestHeader("Cache-Control", "no-cache"); xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xmlhttp.onreadystatechange = function(){if(xmlhttp.readyState == 4&&xmlhttp.status == 200) {
if(xmlhttp==''){alert("no data");return;}
fileZIP2l[v]=window.location.origin+"/images/"+xmlhttp.responseText;}}

{return;xmlhttp.send('value='+AndroidfileZIP+'&name='+fileZIP2l[v].name);} }
 else{}
closeTableImageWin();}
 else{alert("Failed to load file");} }
 }
 else{
 if(myUrl.length<5)
{alert("error in the url"); return;}
 if(document.getElementById('id_imageTableorSize').checked==true)
 {var imgN=document.createElement("img");
 imgN.src=document.getElementById("id_imageTableTextArea").value;w=imgN.width; h=imgN.height;}
fileZIP2l[v]=document.getElementById("id_imageTableTextArea").value;
//imageMarkerWH[v]=w+","+h;
 closeTableImageWin();
 }
 

}

function OK(){
//this.close(); 
labelAtrrinute={};labelAtrrinute.value='';labelAtrrinuteMain={};labelAtrrinute.colorlab=document.getElementById("id_ColorText1").tempColorGIS;labelAtrrinute.stcolorlab=document.getElementById("id_StColorText1").tempColorGIS;
labelAtrrinute.fontsize=document.getElementById("id_pLabelFont").value;labelAtrrinute.opacitymain=document.getElementById('pOpacity').value;labelAtrrinute.opacitymain_st=document.getElementById('pOpacitySt').value;
labelAtrrinute.fontopac=document.getElementById("id_pLabelFontOpac").value;labelAtrrinute.fontWeight=document.getElementById("id_labelfontWeight").value;
labelAtrrinute.fontstroke_w=document.getElementById("id_pLabelStrokeW").value;
labelAtrrinute.fontstroke_op=document.getElementById("id_pLabelStrokeOp").value;
labelAtrrinute.fontbaseline=document.getElementById("id_labelTextBaseline").value;
labelAtrrinute.fontFamily=document.getElementById("id_labelfontFamily").value;

if(document.getElementById("id_RandomTextLabel").checked==true){labelAtrrinute.randomText=true;}
if(document.getElementById("id_RandomTextLabel").checked==false){labelAtrrinute.randomText=false;}
labelAtrrinute.randomTextText=document.getElementById("textRandomlabel").value;
labelAtrrinute.fontStyle=document.getElementById("id_labelfontStyle").value;
if(document.getElementById("id_CheckNameLabel").checked==true){labelAtrrinute.ckeckname=true;}
if(document.getElementById("id_CheckNameLabel").checked==false){labelAtrrinute.ckeckname=false;}
labelAtrrinute.fontAlign=document.getElementById("id_labelAlign").value;

var o=document.getElementById("id_labelOpen");
var selectedOptions = [];
for (var i = 0; i < o.options.length; i++){ if (o.options[i].selected) {selectedOptions.push(o.options[i].value);}}
var labelYes=true;
if(selectedOptions.length>0)
{if(selectedOptions.length==1&&selectedOptions[0]=='0'){labelYes=false}}
if(selectedOptions.length==0)
{labelYes=false}
labelAtrrinute.name=[];

if(labelYes==true)
{for(var tzz=0;tzz<selectedOptions.length;tzz++)
{labelAtrrinute.name.push(selectedOptions[tzz]);}
}

if(document.getElementById("id_RowColomLabel").checked==true){if(labelAtrrinute.name.length>1){labelAtrrinute.rowcol=true;}else{labelAtrrinute.rowcol=false;}}
if(document.getElementById("id_RowColomLabel").checked==false){labelAtrrinute.rowcol=false;}
labelAtrrinuteMain=labelAtrrinute;

var   contentImage;
 if (fileZIPl&&fileZIPl.type) {
      var r = new FileReader();
      r.onload = function(e) { contentImage = e.target.result;pLegendImageWebGis=contentImage;
pLegendImageWebGisW=document.getElementById("id_pWidth").value ;
pLegendImageWebGisH=document.getElementById("id_pHeight").value;
updateLegend();
   }
      r.readAsDataURL(fileZIPl);
    } else { 
    //  alert("Failed to load file");
    if (AndroidfileZIP!==''){ contentImage = AndroidfileZIP;pLegendImageWebGis=contentImage;
pLegendImageWebGisW=document.getElementById("id_pWidth").value ;
pLegendImageWebGisH=document.getElementById("id_pHeight").value;
updateLegend();}
 
var t='';
if(document.getElementById("id_imageUrlTextArea").value.length>4){t=document.getElementById("id_imageUrlTextArea").value;
pLegendImageWebGisW=document.getElementById("id_pWidth").value ;
pLegendImageWebGisH=document.getElementById("id_pHeight").value;}
pLegendImageWebGis=t;
    }

if (fileZIP2l.length>0) {imageMarkerArWebGis=new Array();
for(var jj=0;jj<fileZIP2l.length;jj++)
{
if (fileZIP2l[jj]&&fileZIP2l[jj].type) {
      var r = new FileReader();var tf=fileZIP2l[jj];
      r.onload =( function (tf,jj){ return function(e) { 
	var contentImage2 = e.target.result;
imageMarkerArWebGis[jj]=contentImage2;
imageMarkerArWebGisWH[jj]=imageMarkerWH[jj];
updateLegend();
   }})(tf,jj);
      r.readAsDataURL(fileZIP2l[jj]);
updateLegend();
    } else { 
    if (AndroidfileZIP!==''){ var tf=AndroidfileZIP;
    
	var contentImage2 = AndroidfileZIP;
imageMarkerArWebGis[jj]=contentImage2;
imageMarkerArWebGisWH[jj]=imageMarkerWH[jj];
updateLegend();
   }
   updateLegend();
   var t='';
if(fileZIP2l[jj].length>4){t=fileZIP2l[jj];imageMarkerArWebGisWH[jj]=imageMarkerWH[jj];}
imageMarkerArWebGis[jj]=t;
    }

        }///end for(var jj=0;jj<fileZIP2l.length;jj+)
 }///end if (fileZIP2l.length>0) {


//var pRad = document.getElementById('pRadius').value;
var pStroke = document.getElementById('pStroke').value;
var pOpacity = document.getElementById('pOpacity').value;

pRadLegend=document.getElementById('pRadius').value;
pStrokeLegend=pStroke;
pOpacityLegend=pOpacity;
//fillColorLegend=document.getElementById('blockleg').style.background;
 //StrokeColorLegend=colorLegStroke;
 divPalMain =divPal ;
 divPalBMain = divPalB;
LegendStrockRMain = LegendStrockR;
 if(document.getElementById("pClass").value=='0')
 {LegendIndex=[];}
 LegendIndexMain = LegendIndex;
SizeInputMain=SizeInput;
LegendValueMain=LegendValue;
LegendFieldMain=document.getElementById("pField").value;
 if(document.getElementById("pClass").value=='0')
 {LegendText=[];}
LegendTextMain=LegendText;
LegendTextNameMain=LegentTextName;
labelAtrrinuteArrayMain=LegendLabelObj;



         /*for(var ab = 0; ab < mLayers.length; ab++ )
             { 
   if(mLayers[ab].protocol)
 {
                if (mLayers[ab].protocol.featureType==layerLegendType)
                {delete mLayers[ab].EditTextLegendWebGis;   }                  }
else{if (mLayers[ab].name==layerLegendType)
                {delete mLayers[ab].EditTextLegendWebGis;
   }           }
}*/
if (!fileZIPl) 
{updateLegend();}
//close();
}
function OKc()
{document.getElementById("id_legendOWG").parentNode.removeChild(document.getElementById("id_legendOWG"));}
 /////////////
/*function drawPalette() {
	var out = "";
	for (var i = 0; i < 360; i++) {
		out += "<div onclick='selectColor(this);' style='background-color:" + HSLToRGB(i, 100, 100) + "'><\/div>";
	}
out += "<div onclick='selectColor(this);' style='background-color:#FFFFFF; width:2px;'><\/div>";
out += "<div onclick='selectColor(this);' style='background-color:#000000; width:2px;'><\/div>";

	document.getElementById("paletteCs").innerHTML = out;


}

function drawPaletteStroke() {
	var out = "";
	for (var i = 0; i < 360; i++) {
		out += "<div onclick='selectColorStroke(this);' style='background-color:" + HSLToRGB(i, 100, 100) + "'><\/div>";
	}
out += "<div onclick='selectColorStroke(this);' style='background-color:#FFFFFF;width:2px;'><\/div>";
out += "<div onclick='selectColorStroke(this);' style='background-color:#000000;width:2px;'><\/div>";
document.getElementById("paletteCstroke").innerHTML = out;

}

function selectColor(div) {
	colorLeg = div.style.backgroundColor;
	colorLeg = rgbNormal(colorLeg);
document.getElementById("blockleg").style.background=colorLeg; 
//fillColorLegend=color;
	//alert(colorLeg);
}*/
/*function selectColorIndex(div) {
	 var LegendIndex = div.style.backgroundColor;
	LegendIndex = rgbNormal(LegendIndex);
//if(document.getElementById("divPalCo_id")){document.getElementById("divPalCo_id").style.background=LegendIndex; }
var tt=div.parentNode;
var ttt=tt.nextSibling.id
//alert(ttt);
document.getElementById(ttt).style.background=LegendIndex; 
//fillColorLegend=color;
	//alert(color);
}*/
function selectColorIndexAuto(div) {
	 var LegendIndex = div.style.backgroundColor;
	LegendIndex = rgbNormal(LegendIndex);
var tt=div.parentNode;
var ttt=tt.nextSibling.id
//alert(ttt);
document.getElementById(ttt).style.background=LegendIndex; 
//fillColorLegend=color;
	//alert(color);
}
function selectColorStroke(div) {
	colorLegStroke = div.style.backgroundColor;
	colorLegStroke = rgbNormal(colorLegStroke);
document.getElementById("blocklegStrokeColor").style.background=colorLegStroke; 
//fillColorLegend=color;
	//alert(color);
}
function rgbNormal(color) {
	color = color.toString();
	var re = /rgb\((.*?)\)/i;
	if(re.test(color)) {
		compose = RegExp.$1.split(",");
		var hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
		var result = "#";
		for (var i = 0; i < compose.length; i++) {
			rgb = parseInt(compose[i]);
			result += hex[parseInt(rgb / 16)] + hex[rgb % 16];
		}
		return result;
	} else return color;
}




function HSLToRGB(Hue, Saturation, Luminance) {
	var R, G, B;
	var nH, nS, nL;
	var nF, nP, nQ, nT;
	var lH;
	if (Saturation > 0) {
		nH = Hue / 60;
		nL = Luminance / 100;
		nS = Saturation / 100;
		
		lH = parseInt(nH);
		nF = nH - lH;
		nP = nL * (1 - nS);
		nQ = nL * (1 - nS * nF);
		nT = nL * (1 - nS * (1 - nF));
		switch (lH) {
			case 0:
				R = nL * 255;
				G = nT * 255;
				B = nP * 255;
			break;
			case 1:
				R = nQ * 255;
				G = nL * 255;
				B = nP * 255;
			break;
			case 2:
				R = nP * 255;
				G = nL * 255;
				B = nT * 255;
			break;
			case 3:
				R = nP * 255;
				G = nQ * 255;
				B = nL * 255;
			break;
			case 4:
				R = nT * 255;
				G = nP * 255;
				B = nL * 255;
			break;
			case 5:
				R = nL * 255;
				G = nP * 255;
				B = nQ * 255;
			break;
		}
	} else {
		R = (Luminance * 255) / 100;
		G = R;
		B = R;
	}
	return RGBToLongSafe(R, G, B);
}
	
function RGBToLongSafe(R, G, B) {
	R = parseInt(xLimit(R, 0, 255));
	G = parseInt(xLimit(G, 0, 255));
	B = parseInt(xLimit(B, 0, 255));
	return decToHex([R,G,B]);
}

function decToHex(decArray) {
	var hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
	var out = "#";
	for (var i = 0; i < decArray.length; i++) {
		dec = parseInt(decArray[i]);
		out += hex[parseInt(dec / 16)] + hex[dec % 16];
	}
	return out;
}
	
function xLimit(Value, Lower, Higher) {
	if (Value < Lower) Value = Lower;
	if (Value > Higher) Value = Higher;
	return Value;
}



