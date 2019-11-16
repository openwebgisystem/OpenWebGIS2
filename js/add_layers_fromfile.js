var contentsTXTfile=''; 
function New_LayerJSON()
{
var lines = [];
var headers;
var contents2;
var contents;
 if (fileLayer) {
 var r = new FileReader();
 r.onload = function(e) { 
 contents = e.target.result;
loadlayerJSON(contents);
 }
 r.readAsText(fileLayer);
 } else { 
 alert("Failed to load file");
 }
}
function loadlayerJSON(contents)
{var vectorSource = new ol.source.Vector({
        features: (new ol.format.GeoJSON()).readFeatures(JSON.parse(contents),{featureProjection: ol.proj.get('EPSG:3857'),
                dataProjection: 'EPSG:4326'} )
      });

     var style = new ol.style.Style({
     image: new ol.style.Circle(  ({
            radius: 3,
            fill: new ol.style.Fill({
                color: '#FF9000' 
            }),
             stroke: new ol.style.Stroke({
        color: '#ffff00',
        width: 1
    })
        }))    ,
    stroke: new ol.style.Stroke({
        color: '#ffff00',
        width: 1
    }),
    fill: new ol.style.Fill({
       color: [255, 144, 0, .6]
        //color:"#FF9000",
            }),
  text:new ol.style.Text({})
});
          var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: style,
        //Name: fileLayer.name
      });
      var NewLayerName_file=''
document.getElementById('newLayer_idname').value!==''?NewLayerName_file=document.getElementById('newLayer_idname').value:NewLayerName_file=fileLayer.name;
      vectorLayer.set('name', NewLayerName_file)
      vectorLayer.set('title', NewLayerName_file)
     var zindex=0;
map.getLayers().getArray().forEach(function(layer_arr){layer_arr.getLayers().getArray().forEach(function(layer_arr2){if(layer_arr2.getZIndex()>zindex&&layer_arr2.get('title')!=='Markers'){zindex=layer_arr2.getZIndex();}})})
vectorLayer.setZIndex(zindex+1);
map.getView().fit(vectorSource.getExtent(), map.getSize());
layer_vector_group.getLayers().push(vectorLayer)
      }
 function   New_LayerGML2()
 {
var lines = [];
var headers;
var contents2;
var contents;
 if (fileLayer) {
 var r = new FileReader();
 r.onload = function(e) { 
 contents = e.target.result;
loadlayerGML2(contents);
 }
 r.readAsText(fileLayer);
 } else { 
 alert("Failed to load file");
 }
}
function loadlayerGML2(contents)
{var vectorSource = new ol.source.Vector({
        features: (new ol.format.GML2()).readFeatures(contents,{featureProjection: ol.proj.get('EPSG:3857'),
                dataProjection: 'EPSG:4326'} )
      });

      var style = new ol.style.Style({
     image: new ol.style.Circle( /** @type {olx.style.IconOptions} */ ({
            radius: 3,
            fill: new ol.style.Fill({
                color: '#FF9000'
            }),
             stroke: new ol.style.Stroke({
        color: '#ffff00',
        width: 1
    })
        }))    ,
    stroke: new ol.style.Stroke({
        color: '#ffff00',
        width: 1
    }),
    fill: new ol.style.Fill({
       color: [255, 144, 0, .6]
        //color:"#FF9000",
            }),
  text:new ol.style.Text({})
});
          var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: style,
        //Name: NewLayerName_file
      });
      rtt=vectorSource; 
       var NewLayerName_file=''
document.getElementById('newLayer_idname').value!==''?NewLayerName_file=document.getElementById('newLayer_idname').value:NewLayerName_file=fileLayer.name;
      vectorLayer.set('name', NewLayerName_file)
    vectorLayer.set('title', NewLayerName_file)
     var zindex=0;
map.getLayers().getArray().forEach(function(layer_arr){layer_arr.getLayers().getArray().forEach(function(layer_arr2){if(layer_arr2.getZIndex()>zindex&&layer_arr2.get('title')!=='Markers'){zindex=layer_arr2.getZIndex();}})})
vectorLayer.setZIndex(parseInt(zindex)+1);
map.getView().fit(vectorSource.getExtent(), map.getSize());
layer_vector_group.getLayers().push(vectorLayer)
      }

function   New_LayerGML3()
 {
var lines = [];
var headers;
var contents2;
var contents;
 if (fileLayer) {
 var r = new FileReader();
 r.onload = function(e) { 
 contents = e.target.result;
loadlayerGML3(contents);
 }
 r.readAsText(fileLayer);
 } else { 
 alert("Failed to load file");
 }
}
function loadlayerGML3(contents)
{var vectorSource = new ol.source.Vector({
        features: (new ol.format.GML()).readFeatures(contents,{featureProjection: ol.proj.get('EPSG:3857'),
                dataProjection: 'EPSG:4326'} )
      });

     var style = new ol.style.Style({
     image: new ol.style.Circle( /** @type {olx.style.IconOptions} */ ({
            radius: 3,
            fill: new ol.style.Fill({
                color: '#FF9000'
            }),
             stroke: new ol.style.Stroke({
        color: '#ffff00',
        width: 1
    })
        }))    ,
    stroke: new ol.style.Stroke({
        color: '#ffff00',
        width: 1
    }),
    fill: new ol.style.Fill({
       color: [255, 144, 0, .6]
        //color:"#FF9000",
            }),
  text:new ol.style.Text({})
});
          var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: style,
        //Name: fileLayer.name
      });
      rtt=vectorSource; 
       var NewLayerName_file=''
document.getElementById('newLayer_idname').value!==''?NewLayerName_file=document.getElementById('newLayer_idname').value:NewLayerName_file=fileLayer.name;
      vectorLayer.set('name', NewLayerName_file)
     vectorLayer.set('title', NewLayerName_file)
     var zindex=0;
map.getLayers().getArray().forEach(function(layer_arr){layer_arr.getLayers().getArray().forEach(function(layer_arr2){if(layer_arr2.getZIndex()>zindex&&layer_arr2.get('title')!=='Markers'){zindex=layer_arr2.getZIndex();}})})
vectorLayer.setZIndex(zindex+1);
map.getView().fit(vectorSource.getExtent(), map.getSize());
layer_vector_group.getLayers().push(vectorLayer)
      }
function   New_LayerKML()
 {
var lines = [];
var headers;
var contents2;
var contents;
 if (fileLayer) {
 var r = new FileReader();
 r.onload = function(e) { 
 contents = e.target.result;
loadlayerKML(contents);
 }
 r.readAsText(fileLayer);
 } else { 
 alert("Failed to load file");
 }
}
function loadlayerKML(contents)
{var vectorSource = new ol.source.Vector({
        features: (new ol.format.KML()).readFeatures(contents,{featureProjection: ol.proj.get('EPSG:3857'),
                dataProjection: 'EPSG:4326'} )
      });

     var style = new ol.style.Style({
     image: new ol.style.Circle( /** @type {olx.style.IconOptions} */ ({
            radius: 3,
            fill: new ol.style.Fill({
                color: '#FF9000'
            }),
             stroke: new ol.style.Stroke({
        color: '#ffff00',
        width: 1
    })
        }))    ,
    stroke: new ol.style.Stroke({
        color: '#ffff00',
        width: 1
    }),
    fill: new ol.style.Fill({
       color: [255, 144, 0, .6]
        //color:"#FF9000",
         }),
  text:new ol.style.Text({})
});
          var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
       style: style,
        //Name: fileLayer.name
      });
      rtt=vectorSource; 
       var NewLayerName_file=''
document.getElementById('newLayer_idname').value!==''?NewLayerName_file=document.getElementById('newLayer_idname').value:NewLayerName_file=fileLayer.name;
      vectorLayer.set('name', NewLayerName_file)
      vectorLayer.set('title', NewLayerName_file)
     var zindex=0;
map.getLayers().getArray().forEach(function(layer_arr){layer_arr.getLayers().getArray().forEach(function(layer_arr2){if(layer_arr2.getZIndex()>zindex&&layer_arr2.get('title')!=='Markers'){zindex=layer_arr2.getZIndex();}})})
vectorLayer.setZIndex(zindex+1);
map.getView().fit(vectorSource.getExtent(), map.getSize());
layer_vector_group.getLayers().push(vectorLayer)
      }
function UploadShape()
{
loadshp({
    url: fileLayer, // path or your upload file
    encoding: 'utf-8', // default utf-8
    EPSG: '4326' // default 4326
}, function(geojson) { loadlayerJSON(JSON.stringify(geojson))
    // geojson returned
});

}
function New_LayerGPX()
{
var lines = [];
var headers;
var contents2;
var contents;
 if (fileLayer) {
 var r = new FileReader();
 r.onload = function(e) { 
 contents = e.target.result;
loadlayerGPX(contents);
 }
 r.readAsText(fileLayer);
 } else { 
 alert("Failed to load file");
 }
}
function loadlayerGPX(contents)
{var vectorSource = new ol.source.Vector({
        features: (new ol.format.GPX()).readFeatures(contents,{featureProjection: ol.proj.get('EPSG:3857'),
                dataProjection: 'EPSG:4326'} )
      });
 var style = new ol.style.Style({
     image: new ol.style.Circle( /** @type {olx.style.IconOptions} */ ({
            radius: 3,
            fill: new ol.style.Fill({
                color: '#FF9000'
            }),
             stroke: new ol.style.Stroke({
        color: '#ffff00',
        width: 1
    })
        }))    ,
    stroke: new ol.style.Stroke({
        color: '#ffff00',
        width: 1
    }),
    fill: new ol.style.Fill({
       color: [255, 144, 0, .6]
        //color:"#FF9000",
         }),
  text:new ol.style.Text({})
});
    
          var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: style,
        //Name: fileLayer.name
      });
      rtt=vectorSource; 
       var NewLayerName_file=''
document.getElementById('newLayer_idname').value!==''?NewLayerName_file=document.getElementById('newLayer_idname').value:NewLayerName_file=fileLayer.name;
      vectorLayer.set('name', NewLayerName_file)
    vectorLayer.set('title', NewLayerName_file)
     var zindex=0;
map.getLayers().getArray().forEach(function(layer_arr){layer_arr.getLayers().getArray().forEach(function(layer_arr2){if(layer_arr2.getZIndex()>zindex&&layer_arr2.get('title')!=='Markers'){zindex=layer_arr2.getZIndex();}})})
vectorLayer.setZIndex(zindex+1);
map.getView().fit(vectorSource.getExtent(), map.getSize());
layer_vector_group.getLayers().push(vectorLayer)
      }
function New_LayerWKT()
{
var lines = [];
var headers;
var contents2;
var contents;
 if (fileLayer) {
 var r = new FileReader();
 r.onload = function(e) { 
 contents = e.target.result;
loadlayerWKT(contents);
 }
 r.readAsText(fileLayer);
 } else { 
 alert("Failed to load file");
 }
}
function loadlayerWKT(contents)
{var vectorSource = new ol.source.Vector({
        features: (new ol.format.WKT()).readFeatures(contents,{featureProjection: ol.proj.get('EPSG:3857'),
                dataProjection: 'EPSG:4326'} )
      });
 var style = new ol.style.Style({
     image: new ol.style.Circle( /** @type {olx.style.IconOptions} */ ({
            radius: 3,
            fill: new ol.style.Fill({
                color: '#FF9000'
            }),
             stroke: new ol.style.Stroke({
        color: '#ffff00',
        width: 1
    })
        }))    ,
    stroke: new ol.style.Stroke({
        color: '#ffff00',
        width: 1
    }),
    fill: new ol.style.Fill({
       color: [255, 144, 0, .6]
        //color:"#FF9000",
        }),
  text:new ol.style.Text({})
});
          var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: style,
        //Name: fileLayer.name
      });
      rtt=vectorSource; 
       var NewLayerName_file=''
document.getElementById('newLayer_idname').value!==''?NewLayerName_file=document.getElementById('newLayer_idname').value:NewLayerName_file=fileLayer.name;
      vectorLayer.set('name', NewLayerName_file)
     vectorLayer.set('title', NewLayerName_file)
     var zindex=0;
map.getLayers().getArray().forEach(function(layer_arr){layer_arr.getLayers().getArray().forEach(function(layer_arr2){if(layer_arr2.getZIndex()>zindex&&layer_arr2.get('title')!=='Markers'){zindex=layer_arr2.getZIndex();}})})
vectorLayer.setZIndex(zindex+1);
map.getView().fit(vectorSource.getExtent(), map.getSize());
layer_vector_group.getLayers().push(vectorLayer)
      }

function OK_fileTXT2()
{contentsTXTfile='';
var SepSym=document.getElementById("sepTXTcsv_id").value;
if(document.getElementById("sepTXTcsvw_idSep").value!==''){SepSym=document.getElementById("sepTXTcsvw_idSep").value;}
var checkPop=document.getElementById("Id_KavikIsInFileWeb").checked;
var lines = []; 
var headers;
 if (fileLayer) {
 var r = new FileReader();
 r.onload = function(e) { 
 var contents = e.target.result;

var allTextLines = contents.split(/\r\n|\n/);
 headers = allTextLines[0].split(SepSym);
 for (var i=1; i<allTextLines.length; i++) {
if(checkPop==true)
{var dataS = allTextLines[i].split('"');
if(dataS[1])
{var c=dataS[1].replace(/,/g,'a;=;a');
var dataSS=dataS[0]+c+dataS[2];}
if(dataS[1])
{var data = dataSS.split(SepSym);}
else
{var data = allTextLines[i].split(SepSym);}
}
else
{
 var data = allTextLines[i].split(SepSym);
}
 if (data.length == headers.length) {
 var tarr = []; 
 for (var j=0; j<headers.length; j++) {
 //tarr.push(headers[j]+"_:_"+data[j]);
tarr.push(headers[j]+"_:_"+data[j].replace(/a;=;a/g,','));
 }
 lines.push(tarr); contentsTXTfile=lines; 
 }
 }

document.getElementById("id_divloadfiles_layer").style.display="none";
var htmlTextLonLat='';
htmlTextLonLat+='<a>Please select longitude:</a><br>'+
 '<select id="longTXT_id"> '+
 '<option selected value="0">.</option>'+
'</select><br>'+
'<a>Please select latitude:</a><br>'+
 '<select id="latTXT_id"> '+
 '<option selected value="0">.</option>'+
'</select><br>'+
'<input type="checkbox" id="id_convertCoordCSV" title="if coordinates are in format ISO6709(DD.DDS\N\W\E), then they must be converted in number. Example: latitude=24.80S will be converted in latitude=-24.80" value="checkbox"/>Convert coordinate to number<br>'+
//'<p> <button class=buttonclass type=button onclick=OK_LonLatTXT()>OK</button></p>';
'<p style="left: 0px; bottom: 0px; position: relative; height: 15px;"><button class=buttonclass style="position: absolute; left: 0px; bottom: 0px;" type=button onclick=CloseCSVaddWindow()>Close</button> <button id=OK_LonLat_id class=buttonclass type=button style="position: absolute; right: 0px; bottom: 0px;" onclick=OK_LonLatTXT()>OK</button></p>';

var DivEditeLeg=document.createElement("div");

DivEditeLeg.id="id_divuploadfiles_csv";
DivEditeLeg.style.width="300px";
DivEditeLeg.innerHTML='<div id="id_id_divuploadfiles0_csv" style="font-family:Arial;background:#ffffff; color:#000000;z-index: 6000;position:absolute;overflow:hidden; border: 1px solid black;right: 0.5em; top: 2.5em;">'+
htmlTextLonLat+
'</div>';

if(!document.getElementById("id_divuploadfiles_csv"))
{document.getElementById('menu_main').appendChild(DivEditeLeg);

}

 for(var ab = 0; ab < headers.length; ab++ )
{var t=document.createElement('option');
t.value=headers[ab];
t.text=headers[ab];
document.getElementById("longTXT_id").appendChild(t);
}
 for(var ab = 0; ab < headers.length; ab++ )
{var t=document.createElement('option');
t.value=headers[ab];
t.text=headers[ab];
document.getElementById("latTXT_id").appendChild(t);
}
 }
 r.readAsText(fileLayer);
 } else { 
 alert("Failed to load file");
 }
}
function CloseCSVaddWindow()
{document.getElementById("id_divuploadfiles_csv").parentNode.removeChild(document.getElementById("id_divuploadfiles_csv"));
//document.getElementById("id_divloadfiles_layer").style.display="block"; 
}
function OK_LonLatTXT()
{
  
var vectorSource = new ol.source.Vector({
        //features: (new ol.format.GPX()).readFeatures(contents,{featureProjection: ol.proj.get('EPSG:3857'),
            //    dataProjection: 'EPSG:4326'} )
      });

    var style = new ol.style.Style({
     image: new ol.style.Circle( /** @type {olx.style.IconOptions} */ ({
            radius: 3,
            fill: new ol.style.Fill({
                color: '#FF9000'
            }),
             stroke: new ol.style.Stroke({
        color: '#ffff00',
        width: 1
    })
        }))    ,
    stroke: new ol.style.Stroke({
        color: '#ffff00',
        width: 1
    }),
    fill: new ol.style.Fill({
        //color: [51, 51, 51, .7]
        color:"#FF9000"
    })
});
          var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        //style: styleFunction,
        style: style
        //Name: fileLayer.name
      });

      rtt=vectorSource; 
       var NewLayerName_file='';
document.getElementById('newLayer_idname').value!==''?NewLayerName_file=document.getElementById('newLayer_idname').value:NewLayerName_file=fileLayer.name;
document.getElementById("id_divloadfiles_layer").parentNode.removeChild(document.getElementById("id_divloadfiles_layer"));
      vectorLayer.set('name', NewLayerName_file);
      vectorLayer.set('title', NewLayerName_file);
   
      
//var new_layer_TXT = new OpenLayers.Layer.Vector(fileZIP.name.split('.')[0],{renderers:["Canvas", "SVG", "VML"]});
 for(var ab = 0; ab < contentsTXTfile.length; ab++ )
{var x; var y;
for(var a = 0; a < contentsTXTfile[ab].length; a++ )
{ if (document.getElementById("longTXT_id").value==contentsTXTfile[ab][a].split('_:_')[0])
{ x=contentsTXTfile[ab][a].split('_:_')[1].replace(/,/g,".");
if(document.getElementById("id_convertCoordCSV").checked==true)
{var x1=x;if(x.split('W')[1]==''){x=x.split('W')[0]*parseInt(-1);}if(x1.split('E')[1]==''){x=x1.split('E')[0]}}
}
if (document.getElementById("latTXT_id").value==contentsTXTfile[ab][a].split('_:_')[0])
{ y=contentsTXTfile[ab][a].split('_:_')[1].replace(/,/g,".");
if(document.getElementById("id_convertCoordCSV").checked==true)
{var y1=y;if(y.split('S')[1]==''){y=y.split('S')[0]*parseInt(-1);}if(y1.split('N')[1]==''){y=y1.split('N')[0]}}
}
}//end for(var a = 0; a < contentsTXTfile[ab].length; a++ )

/*var new_pos=new OpenLayers.LonLat(x,y).transform(
new OpenLayers.Projection("EPSG:4326"),
MapCentia.gc2.map.getProjectionObject());
var new_lon=new_pos.lon;
var new_lat=new_pos.lat;
var first_point =new OpenLayers.Geometry.Point(new_lon, new_lat);*/
var point_geom = new ol.geom.Point( ol.proj.transform([x*1,y*1], 'EPSG:4326', 'EPSG:3857'));
 
var feature_layer = new ol.Feature({geometry: point_geom});
rtt=feature_layer; 
try{
vectorSource.addFeature( feature_layer );}catch(e){alert(e+" x:"+x+" y:"+y)}
for(var a = 0; a < contentsTXTfile[ab].length; a++ )
{
//first_point.attributes[contentsTXTfile[ab][a].split('_:_')[0]]=contentsTXTfile[ab][a].split('_:_')[1].replace(/,/g,".");
var key=contentsTXTfile[ab][a].split('_:_')[0]; var value=contentsTXTfile[ab][a].split('_:_')[1]
feature_layer.setProperties({[key]:value});
}
//first_point.fid=new_layer_TXT.name+"."+ab;
//new_layer_TXT.addFeatures(first_point);

}
//alert("z "+map.getLayers().getArray()[map.getLayers().getArray().length-1].getZIndex()+1)
var zindex=0;
map.getLayers().getArray().forEach(function(layer_arr){layer_arr.getLayers().getArray().forEach(function(layer_arr2){if(layer_arr2.getZIndex()>zindex&&layer_arr2.get('title')!=='Markers'){zindex=layer_arr2.getZIndex();}})})
vectorLayer.setZIndex(zindex+1);
map.getView().fit(vectorSource.getExtent(), map.getSize());
layer_vector_group.getLayers().push(vectorLayer);
CloseCSVaddWindow();
//rtt=layer_vector_group; alert("ggg2")
//map.getLayers().push(vectorLayer);
      //map.addLayer(vectorLayer)
//end for(var ab = 0; ab < contentsTXTfile.length; ab++ )
/*var new_style_layer= new OpenLayers.Style({
 pointRadius: 3,
 fillColor: "#FF9000",
 strokeColor: "#FF9000",
 strokeWidth: 1,
fillOpacity:1,
 strokeOpacity:1
 });
 var selStyle = new OpenLayers.Style({
 pointRadius: 5, 
 fillColor: "#ffaa00",
 strokeColor: "#00DDFF",
 strokeWidth:2,
fillOpacity:1,
 strokeOpacity:1
 }); )*/


}
