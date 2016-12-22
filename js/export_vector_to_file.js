var showSave;var TextFile='';
var DownloadAttributeSupport = 'download' in document.createElement('a');


var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
var marker=0;
if (window.BlobBuilder== undefined){BlobBuilder=window.Blob; marker=1;}

navigator.saveBlob = navigator.saveBlob || navigator.msSaveBlob || navigator.mozSaveBlob || navigator.webkitSaveBlob;


// http://www.w3.org/TR/file-writer-api/#the-filesaver-interface
window.saveAs = window.saveAs || window.webkitSaveAs || window.mozSaveAs || window.msSaveAs;



var BrowserSupportedMimeTypes = {
	"image/jpeg": true,
	"image/png": true,
	"image/gif": true,
	"image/svg+xml": true,
	"image/bmp": true,
	"image/x-windows-bmp": true,
	"image/webp": true,
	"audio/wav": true,
	"audio/mpeg": true,
	"audio/webm": true,
	"audio/ogg": true,
	"video/mpeg": true,
	"video/webm": true,
	"video/ogg": true,
	"text/plain": true,
	"text/html": true,
	"text/xml": true,
	"application/xhtml+xml": true,
	"application/json": true
};



if (BlobBuilder && (window.saveAs || navigator.saveBlob)) {

	showSave = function (data, name, mimeType) {  //alert(name+" 3 ");

		var builder = new BlobBuilder();
		builder.append(data);
		var blob = builder.getBlob(mimetype||"application/octet-stream");
		if (!name) name = "Download.bin";
		
		if (window.saveAs) {
			window.saveAs(blob, name); //alert(name+" 4 ")
		}
		else {
			navigator.saveBlob(blob, name); //alert(name+" 5 ")
		}
	};
}
// Blobs and object URLs:
else if (BlobBuilder && URL) {
	// Currently WebKit and Gecko support BlobBuilder and object URLs.
	showSave = function (data, name, mimetype) { 
		var blob, url, builder = new BlobBuilder(); 
                              if(marker==1)
                              { var Varmime=mimetype.split(";")[0];
                            builder = new Blob([data], {type: Varmime});

                         
                            }
		try{if(marker!=1){builder.append(data);}}catch(e){alert('Error:'+e+" Please reload page")}


		if (!mimetype) mimetype = "application/octet-stream";
		if (DownloadAttributeSupport) {
                                            if(marker!=1)
			{blob = builder.getBlob(mimetype);
			url = URL.createObjectURL(blob);}
                                                 else{url = URL.createObjectURL(builder);}
                                                 
			
			var link = document.createElement("a");
			link.setAttribute("href",url);
			link.setAttribute("download",name||"Download.bin");

			
			var event = document.createEvent('MouseEvents');
			event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
			link.dispatchEvent(event);
		}
		else {
			
			if (BrowserSupportedMimeTypes[mimetype.split(";")[0]] === true) {
				mimetype = "application/octet-stream";
			}

			blob = builder.getBlob(mimetype);
			url = URL.createObjectURL(blob);
			window.open(url, '_blank', '');
		}

		setTimeout(function () {
			URL.revokeObjectURL(url);
		}, 250);


	};
}
// data:-URLs:
else if (!/\bMSIE\b/.test(navigator.userAgent)) {

	showSave = function (data, name, mimetype) {//alert(mimetype);
		if (!mimetype) mimetype = "application/octet-stream";
	
		if (BrowserSupportedMimeTypes[mimetype.split(";")[0]] === true) {
			mimetype = "application/octet-stream";
		}
		
		window.open("data:"+mimetype+","+encodeURIComponent(data), '_blank', '');
	};
}
function onchangeSelectExportLayer(){}
function onchangeSelectExportFormat(){}
function ExportLayerToFile()
{ var layerExport;
if(document.getElementById("id_Export_format_select").value=="0")
{alert ("Select format to export"); return;}
if(document.getElementById("id_Export_Layer_select").value=='0'){ alert('Please select Layer name');return;}
layer_vector_group.getLayers().forEach(function(layer_arr){if(layer_arr.get('name')==document.getElementById("id_Export_Layer_select").value){layerExport=layer_arr;
if(document.getElementById("id_Export_format_select").value=='geojson'){Export_Layer_JSON(layerExport);}
if(document.getElementById("id_Export_format_select").value=='gml2'){Export_Layer_GML2(layerExport);}
if(document.getElementById("id_Export_format_select").value=='gml3'){Export_Layer_GML3(layerExport);}
if(document.getElementById("id_Export_format_select").value=='gpx'){Export_Layer_GPX(layerExport);}
if(document.getElementById("id_Export_format_select").value=='wkt'){Export_Layer_WKT(layerExport);}
if(document.getElementById("id_Export_format_select").value=='csv'){Export_Layer_CSV(layerExport);}
if(document.getElementById("id_Export_format_select").value=='kml'){Export_Layer_KML(layerExport);} }
})
}
function Export_Layer_JSON(layerExport)
{

 var features=layerExport.getSource().getFeatures();
var jsonText = new ol.format.GeoJSON().writeFeatures(features, {'dataProjection':'EPSG:4326','featureProjection':'EPSG:3857'});
TextFile=jsonText;saveData ();

}
function Export_Layer_WKT(layerExport)
{
 var features=layerExport.getSource().getFeatures();
var jsonText = new ol.format.WKT().writeFeatures(features, {'dataProjection':'EPSG:4326','featureProjection':'EPSG:3857'});
TextFile=jsonText;saveData ();
}
function Export_Layer_GML2(layerExport)
{
 var features=layerExport.getSource().getFeatures();
var jsonText = new ol.format.GML( {featureNS: 'http://www.opengis.net/',
             //featurePrefix: 'ccs',
             //geometryName: 'geom',
             extractAttributes: true}).writeFeatures(features, {'dataProjection':'EPSG:4326','featureProjection':'EPSG:3857'});
TextFile=jsonText;saveData ();
}
function Export_Layer_GML3(layerExport)
{
 var features=layerExport.getSource().getFeatures();
var jsonText = new ol.format.GML({featureNS: 'http://www.opengis.net/',
             //featurePrefix: 'ccs',
             //geometryName: 'geom',
             extractAttributes: true}).writeFeatures(features, {'dataProjection':'EPSG:4326','featureProjection':'EPSG:3857'});
TextFile=jsonText;saveData ();
}
function Export_Layer_GPX(layerExport)
{
 var features=layerExport.getSource().getFeatures();
var jsonText = new ol.format.GPX().writeFeatures(features, {'dataProjection':'EPSG:4326','featureProjection':'EPSG:3857'});
TextFile=jsonText;saveData ();

}
function Export_Layer_CSV(layerExport)
{
var fieldsArr=[document.getElementById("id_CSVlonG").value,document.getElementById("id_CSVlatG").value];
var csvArray=[]
for(var key in layerExport.features[0].attributes)
{fieldsArr.push(key);}
csvArray.push([fieldsArr]);
rtt=csvArray;
for(var i=0;i<layerExport.features.length;i++)
{
var attr=[]
var xy=[];
var x1=[];
var y1=[];
xy.push(x1);xy.push(y1);
var xy=parseOb (layerExport.features[i].geometry,xy);
for(var j=0;j<xy[0].length;j++)
{
attr.push([xy[0][j],xy[1][j]])
for(var key in layerExport.features[i].attributes)
{attr[attr.length-1].push(layerExport.features[i].attributes[key])

} }

var datastr=''; var datastr2='';
csvArray.push(attr);
}
for(var g=0;g<csvArray.length;g++)
{
for(var gg=0;gg<csvArray[g].length;gg++)
{datastr = csvArray[g][gg].join(document.getElementById("TypeSeparate_idCSV").value)+ "\n";datastr2+=datastr;}
}
TextFile=datastr2;saveData ();
}
function parseOb (Obj,xy) {
var x,y;
for(var key in Obj)
{if(key=='x'){
x = Obj[key]
var new_pos=new OpenLayers.LonLat(x,0).transform(

xy[0].push(new_pos.lon);
}
if(key=='y'){var y = Obj[key];
var new_pos=new OpenLayers.LonLat(0,y).transform(

xy[1].push(new_pos.lat);}

if (key!=='parent'&&typeof(Obj[key])=='object')
{parseOb(Obj[key],xy)
}
 }
return xy;
}
function Export_Layer_KML(layerExport)
{

 var features=layerExport.getSource().getFeatures();
var jsonText = new ol.format.KML({extractStyles:true,writeStyles:true}).writeFeatures(features, {'dataProjection':'EPSG:4326','featureProjection':'EPSG:3857'});
TextFile=jsonText;saveData ();
}
function saveData () { 
	if (!showSave) {
		alert("Your browser does not support any method of saving JavaScript generated data to files.");
		return;
	}
	var extfile='';if(document.getElementById("id_Export_format_select").value=='gml3'||document.getElementById("id_Export_format_select").value=='gml2'){extfile='gml'}else{extfile=document.getElementById("id_Export_format_select").value}
var namefile=document.getElementById("id_Export_Layer_select").value+"."+extfile;
	showSave(
		TextFile,
		namefile,
		"text/plain; charset=UTF-8");
}
