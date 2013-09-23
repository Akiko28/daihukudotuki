
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Stage}","click",function(sym,e){var counter=sym.getVariable("counter");counter++;sym.setVariable("counter",counter);var daihuku_1=sym.createChildSymbol("daihuku_1","stage");var x=Math.floor(Math.random()*650);var y=0;daihuku_1.getSymbolElement().css({'position':'absolute','left':x-100+'px','top':y+'px'});document.getElementById("Stage_moji").innerText=counter;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.setVariable("counter",0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'daihuku'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",59966,function(sym,e){sym.play('loop');});
//Edge binding end

//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_daihuku}","mousedown",function(sym,e){var element=sym.$("daihuku");element.css({'position':'absolute','top':-10+'px'});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_daihuku}","mouseup",function(sym,e){var element=sym.$("daihuku");element.css({'position':'absolute','top':10+'px'});});
//Edge binding end
})("daihuku");
//Edge symbol end:'daihuku'

//=========================================================

//Edge symbol: 'daihuku_1'
(function(symbolName){})("daihuku_1");
//Edge symbol end:'daihuku_1'
})(jQuery,AdobeEdge,"EDGE-675281719");