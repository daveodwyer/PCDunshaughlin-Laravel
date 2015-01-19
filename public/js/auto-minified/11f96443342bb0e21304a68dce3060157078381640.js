﻿(function($,w,undefined){if(w.footable===undefined||w.footable===null)
throw new Error('Please check and make sure footable.js is included in the page and is loaded prior to this script.');var defaults={sort:true,sorters:{alpha:function(a,b){if(typeof(a)==='string'){a=a.toLowerCase();}
if(typeof(b)==='string'){b=b.toLowerCase();}
if(a===b)return 0;if(a<b)return-1;return 1;},numeric:function(a,b){return a-b;}},classes:{sort:{sortable:'footable-sortable',sorted:'footable-sorted',descending:'footable-sorted-desc',indicator:'footable-sort-indicator'}},events:{sort:{sorting:'footable_sorting',sorted:'footable_sorted'}}};function Sort(){var p=this;p.name='Footable Sortable';p.init=function(ft){p.footable=ft;if(ft.options.sort===true){$(ft.table).unbind('.sorting').bind({'footable_initialized.sorting':function(e){var $table=$(ft.table),$tbody=$table.find('> tbody'),cls=ft.options.classes.sort,column,$th;if($table.data('sort')===false)return;$table.find('> thead > tr:last-child > th, > thead > tr:last-child > td').each(function(ec){var $th=$(this),column=ft.columns[$th.index()];if(column.sort.ignore!==true&&!$th.hasClass(cls.sortable)){$th.addClass(cls.sortable);$('<span />').addClass(cls.indicator).appendTo($th);}});$table.find('> thead > tr:last-child > th.'+cls.sortable+', > thead > tr:last-child > td.'+cls.sortable).unbind('click.footable').bind('click.footable',function(ec){ec.preventDefault();$th=$(this);var ascending=!$th.hasClass(cls.sorted);p.doSort($th.index(),ascending);return false;});var didSomeSorting=false;for(var c in ft.columns){column=ft.columns[c];if(column.sort.initial){var ascending=(column.sort.initial!=='descending');p.doSort(column.index,ascending);break;}}
if(didSomeSorting){ft.bindToggleSelectors();}},'footable_redrawn.sorting':function(e){var $table=$(ft.table),cls=ft.options.classes.sort;if($table.data('sorted')>=0){$table.find('> thead > tr:last-child > th').each(function(i){var $th=$(this);if($th.hasClass(cls.sorted)||$th.hasClass(cls.descending)){p.doSort(i);return;}});}},'footable_column_data.sorting':function(e){var $th=$(e.column.th);e.column.data.sort=e.column.data.sort||{};e.column.data.sort.initial=$th.data('sort-initial')||false;e.column.data.sort.ignore=$th.data('sort-ignore')||false;e.column.data.sort.selector=$th.data('sort-selector')||null;var match=$th.data('sort-match')||0;if(match>=e.column.data.matches.length)match=0;e.column.data.sort.match=e.column.data.matches[match];}}).data('footable-sort',p);}};p.doSort=function(columnIndex,ascending){var ft=p.footable;if($(ft.table).data('sort')===false)return;var $table=$(ft.table),$tbody=$table.find('> tbody'),column=ft.columns[columnIndex],$th=$table.find('> thead > tr:last-child > th:eq('+columnIndex+')'),cls=ft.options.classes.sort,evt=ft.options.events.sort;ascending=(ascending===undefined)?$th.hasClass(cls.sorted):(ascending==='toggle')?!$th.hasClass(cls.sorted):ascending;if(column.sort.ignore===true)return true;var event=ft.raise(evt.sorting,{column:column,direction:ascending?'ASC':'DESC'});if(event&&event.result===false)return;$table.data('sorted',column.index);$table.find('> thead > tr:last-child > th, > thead > tr:last-child > td').not($th).removeClass(cls.sorted+' '+cls.descending);if(ascending===undefined){ascending=$th.hasClass(cls.sorted);}
if(ascending){$th.removeClass(cls.descending).addClass(cls.sorted);}else{$th.removeClass(cls.sorted).addClass(cls.descending);}
p.sort(ft,$tbody,column,ascending);ft.bindToggleSelectors();ft.raise(evt.sorted,{column:column,direction:ascending?'ASC':'DESC'});};p.rows=function(ft,tbody,column){var rows=[];tbody.find('> tr').each(function(){var $row=$(this),$next=null;if($row.hasClass(ft.options.classes.detail))return true;if($row.next().hasClass(ft.options.classes.detail)){$next=$row.next().get(0);}
var row={'row':$row,'detail':$next};if(column!==undefined){row.value=ft.parse(this.cells[column.sort.match],column);}
rows.push(row);return true;}).detach();return rows;};p.sort=function(ft,tbody,column,ascending){var rows=p.rows(ft,tbody,column);var sorter=ft.options.sorters[column.type]||ft.options.sorters.alpha;rows.sort(function(a,b){if(ascending){return sorter(a.value,b.value);}else{return sorter(b.value,a.value);}});for(var j=0;j<rows.length;j++){tbody.append(rows[j].row);if(rows[j].detail!==null){tbody.append(rows[j].detail);}}};}
w.footable.plugins.register(Sort,defaults);})(jQuery,window);﻿(function($,w,undefined){if(w.footable===undefined||w.foobox===null)
throw new Error('Please check and make sure footable.js is included in the page and is loaded prior to this script.');var defaults={};function MyPlugin(){var p=this;p.name='Footable MyPlugin';p.init=function(ft){$(ft.table).bind({});};}
w.footable.plugins.register(MyPlugin,defaults);})(jQuery,window);(function($,w,undefined){if(w.footable===undefined||w.footable===null)
throw new Error('Please check and make sure footable.js is included in the page and is loaded prior to this script.');var defaults={paginate:true,pageSize:10,pageNavigation:'.pagination',firstText:'&laquo;',previousText:'&lsaquo;',nextText:'&rsaquo;',lastText:'&raquo;',limitNavigation:0,limitPreviousText:'...',limitNextText:'...'};function pageInfo(ft){var $table=$(ft.table),data=$table.data();this.pageNavigation=data.pageNavigation||ft.options.pageNavigation;this.pageSize=data.pageSize||ft.options.pageSize;this.firstText=data.firstText||ft.options.firstText;this.previousText=data.previousText||ft.options.previousText;this.nextText=data.nextText||ft.options.nextText;this.lastText=data.lastText||ft.options.lastText;this.limitNavigation=parseInt(data.limitNavigation||ft.options.limitNavigation||defaults.limitNavigation,10);this.limitPreviousText=data.limitPreviousText||ft.options.limitPreviousText;this.limitNextText=data.limitNextText||ft.options.limitNextText;this.limit=this.limitNavigation>0;this.currentPage=data.currentPage||0;this.pages=[];this.control=false;}
function Paginate(){var p=this;p.name='Footable Paginate';p.init=function(ft){if(ft.options.paginate===true){if($(ft.table).data('page')===false)return;p.footable=ft;$(ft.table).unbind('.paging').bind({'footable_initialized.paging footable_row_removed.paging footable_redrawn.paging footable_sorted.paging footable_filtered.paging':function(){p.setupPaging();}}).data('footable-paging',p);}};p.setupPaging=function(){var ft=p.footable,$tbody=$(ft.table).find('> tbody');ft.pageInfo=new pageInfo(ft);p.createPages(ft,$tbody);p.createNavigation(ft,$tbody);p.fillPage(ft,$tbody,ft.pageInfo.currentPage);};p.createPages=function(ft,tbody){var pages=1;var info=ft.pageInfo;var pageCount=pages*info.pageSize;var page=[];var lastPage=[];info.pages=[];var rows=tbody.find('> tr:not(.footable-filtered,.footable-row-detail)');rows.each(function(i,row){page.push(row);if(i===pageCount-1){info.pages.push(page);pages++;pageCount=pages*info.pageSize;page=[];}else if(i>=rows.length-(rows.length%info.pageSize)){lastPage.push(row);}});if(lastPage.length>0)info.pages.push(lastPage);if(info.currentPage>=info.pages.length)info.currentPage=info.pages.length-1;if(info.currentPage<0)info.currentPage=0;if(info.pages.length===1){$(ft.table).addClass('no-paging');}else{$(ft.table).removeClass('no-paging');}};p.createNavigation=function(ft,tbody){var $nav=$(ft.table).find(ft.pageInfo.pageNavigation);if($nav.length===0){$nav=$(ft.pageInfo.pageNavigation);if($nav.parents('table:first').length>0&&$nav.parents('table:first')!==$(ft.table))return;if($nav.length>1&&ft.options.debug===true)console.error('More than one pagination control was found!');}
if($nav.length===0)return;if(!$nav.is('ul')){if($nav.find('ul:first').length===0){$nav.append('<ul />');}
$nav=$nav.find('ul');}
$nav.find('li').remove();var info=ft.pageInfo;info.control=$nav;if(info.pages.length>0){$nav.append('<li class="footable-page-arrow"><a data-page="first" href="#first">'+ft.pageInfo.firstText+'</a>');$nav.append('<li class="footable-page-arrow"><a data-page="prev" href="#prev">'+ft.pageInfo.previousText+'</a></li>');if(info.limit){$nav.append('<li class="footable-page-arrow"><a data-page="limit-prev" href="#limit-prev">'+ft.pageInfo.limitPreviousText+'</a></li>');}
if(!info.limit){$.each(info.pages,function(i,page){if(page.length>0){$nav.append('<li class="footable-page"><a data-page="'+i+'" href="#">'+(i+1)+'</a></li>');}});}
if(info.limit){$nav.append('<li class="footable-page-arrow"><a data-page="limit-next" href="#limit-next">'+ft.pageInfo.limitNextText+'</a></li>');p.createLimited($nav,info,0);}
$nav.append('<li class="footable-page-arrow"><a data-page="next" href="#next">'+ft.pageInfo.nextText+'</a></li>');$nav.append('<li class="footable-page-arrow"><a data-page="last" href="#last">'+ft.pageInfo.lastText+'</a></li>');}
$nav.off('click','a[data-page]').on('click','a[data-page]',function(e){e.preventDefault();var page=$(this).data('page');var newPage=info.currentPage;if(page==='first'){newPage=0;}else if(page==='prev'){if(newPage>0)newPage--;}else if(page==='next'){if(newPage<info.pages.length-1)newPage++;}else if(page==='last'){newPage=info.pages.length-1;}else if(page==='limit-prev'){newPage=-1;var first=$nav.find('.footable-page:first a').data('page');p.createLimited($nav,info,first-info.limitNavigation);p.setPagingClasses($nav,info.currentPage,info.pages.length);}else if(page==='limit-next'){newPage=-1;var last=$nav.find('.footable-page:last a').data('page');p.createLimited($nav,info,last+1);p.setPagingClasses($nav,info.currentPage,info.pages.length);}else{newPage=page;}
if(newPage>=0){if(info.limit&&info.currentPage!=newPage){var start=newPage;while(start%info.limitNavigation!==0){start-=1;}
p.createLimited($nav,info,start);}
p.paginate(ft,newPage);}});p.setPagingClasses($nav,info.currentPage,info.pages.length);};p.createLimited=function(nav,info,start){start=start||0;nav.find('li.footable-page').remove();var i,page,$prev=nav.find('li.footable-page-arrow > a[data-page="limit-prev"]').parent(),$next=nav.find('li.footable-page-arrow > a[data-page="limit-next"]').parent();for(i=info.pages.length-1;i>=0;i--){page=info.pages[i];if(i>=start&&i<start+info.limitNavigation&&page.length>0){$prev.after('<li class="footable-page"><a data-page="'+i+'" href="#">'+(i+1)+'</a></li>');}}
if(start===0){$prev.hide();}
else{$prev.show();}
if(start+info.limitNavigation>=info.pages.length){$next.hide();}
else{$next.show();}};p.paginate=function(ft,newPage){var info=ft.pageInfo;if(info.currentPage!==newPage){var $tbody=$(ft.table).find('> tbody');var event=ft.raise('footable_paging',{page:newPage,size:info.pageSize});if(event&&event.result===false)return;p.fillPage(ft,$tbody,newPage);info.control.find('li').removeClass('active disabled');p.setPagingClasses(info.control,info.currentPage,info.pages.length);}};p.setPagingClasses=function(nav,currentPage,pageCount){nav.find('li.footable-page > a[data-page='+currentPage+']').parent().addClass('active');if(currentPage>=pageCount-1){nav.find('li.footable-page-arrow > a[data-page="next"]').parent().addClass('disabled');nav.find('li.footable-page-arrow > a[data-page="last"]').parent().addClass('disabled');}
if(currentPage<1){nav.find('li.footable-page-arrow > a[data-page="first"]').parent().addClass('disabled');nav.find('li.footable-page-arrow > a[data-page="prev"]').parent().addClass('disabled');}};p.fillPage=function(ft,tbody,pageNumber){ft.pageInfo.currentPage=pageNumber;$(ft.table).data('currentPage',pageNumber);tbody.find('> tr').hide();$(ft.pageInfo.pages[pageNumber]).each(function(){p.showRow(this,ft);});ft.raise('footable_page_filled');};p.showRow=function(row,ft){var $row=$(row),$next=$row.next(),$table=$(ft.table);if($table.hasClass('breakpoint')&&$row.hasClass('footable-detail-show')&&$next.hasClass('footable-row-detail')){$row.add($next).show();ft.createOrUpdateDetailRow(row);}
else $row.show();};}
w.footable.plugins.register(Paginate,defaults);})(jQuery,window);﻿/*!
 * FooTableIncs - Awesome Responsive Tables
 * Version : 2.0.3
 * http://fooplugins.com/plugins/footable-jquery/
 *
 * Requires jQuery - http://jquery.com/
 *
 * Copyright 2014 Steven Usher & Brad Vincent
 * Released under the MIT license
 * You are free to use FooTableIncs in commercial projects as long as this copyright header is left intact.
 *
 * Date: 11 Nov 2014
 */
(function($,w,undefined){w.footable={options:{delay:100,breakpoints:{phone:480,tablet:1024},parsers:{alpha:function(cell){return $(cell).data('value')||$.trim($(cell).text());},numeric:function(cell){var val=$(cell).data('value')||$(cell).text().replace(/[^0-9.\-]/g,'');val=parseFloat(val);if(isNaN(val))val=0;return val;}},addRowToggle:true,calculateWidthOverride:null,toggleSelector:' > tbody > tr:not(.footable-row-detail)',columnDataSelector:'> thead > tr:last-child > th, > thead > tr:last-child > td',detailSeparator:':',toggleHTMLElement:'<span />',createGroupedDetail:function(data){var groups={'_none':{'name':null,'data':[]}};for(var i=0;i<data.length;i++){var groupid=data[i].group;if(groupid!==null){if(!(groupid in groups))
groups[groupid]={'name':data[i].groupName||data[i].group,'data':[]};groups[groupid].data.push(data[i]);}else{groups._none.data.push(data[i]);}}
return groups;},createDetail:function(element,data,createGroupedDetail,separatorChar,classes){var groups=createGroupedDetail(data);for(var group in groups){if(groups[group].data.length===0)continue;if(group!=='_none')element.append('<div class="'+classes.detailInnerGroup+'">'+groups[group].name+'</div>');for(var j=0;j<groups[group].data.length;j++){var separator=(groups[group].data[j].name)?separatorChar:'';element.append($('<div></div>').addClass(classes.detailInnerRow).append($('<div></div>').addClass(classes.detailInnerName).append(groups[group].data[j].name+separator)).append($('<div></div>').addClass(classes.detailInnerValue).attr('data-bind-value',groups[group].data[j].bindName).append(groups[group].data[j].display)));}}},classes:{main:'footable',loading:'footable-loading',loaded:'footable-loaded',toggle:'footable-toggle',disabled:'footable-disabled',detail:'footable-row-detail',detailCell:'footable-row-detail-cell',detailInner:'footable-row-detail-inner',detailInnerRow:'footable-row-detail-row',detailInnerGroup:'footable-row-detail-group',detailInnerName:'footable-row-detail-name',detailInnerValue:'footable-row-detail-value',detailShow:'footable-detail-show'},triggers:{initialize:'footable_initialize',resize:'footable_resize',redraw:'footable_redraw',toggleRow:'footable_toggle_row',expandFirstRow:'footable_expand_first_row',expandAll:'footable_expand_all',collapseAll:'footable_collapse_all'},events:{alreadyInitialized:'footable_already_initialized',initializing:'footable_initializing',initialized:'footable_initialized',resizing:'footable_resizing',resized:'footable_resized',redrawn:'footable_redrawn',breakpoint:'footable_breakpoint',columnData:'footable_column_data',rowDetailUpdating:'footable_row_detail_updating',rowDetailUpdated:'footable_row_detail_updated',rowCollapsed:'footable_row_collapsed',rowExpanded:'footable_row_expanded',rowRemoved:'footable_row_removed',reset:'footable_reset'},debug:false,log:null},version:{major:0,minor:5,toString:function(){return w.footable.version.major+'.'+w.footable.version.minor;},parse:function(str){var version=/(\d+)\.?(\d+)?\.?(\d+)?/.exec(str);return{major:parseInt(version[1],10)||0,minor:parseInt(version[2],10)||0,patch:parseInt(version[3],10)||0};}},plugins:{_validate:function(plugin){if(!$.isFunction(plugin)){if(w.footable.options.debug===true)console.error('Validation failed, expected type "function", received type "{0}".',typeof plugin);return false;}
var p=new plugin();if(typeof p['name']!=='string'){if(w.footable.options.debug===true)console.error('Validation failed, plugin does not implement a string property called "name".',p);return false;}
if(!$.isFunction(p['init'])){if(w.footable.options.debug===true)console.error('Validation failed, plugin "'+p['name']+'" does not implement a function called "init".',p);return false;}
if(w.footable.options.debug===true)console.log('Validation succeeded for plugin "'+p['name']+'".',p);return true;},registered:[],register:function(plugin,options){if(w.footable.plugins._validate(plugin)){w.footable.plugins.registered.push(plugin);if(typeof options==='object')$.extend(true,w.footable.options,options);}},load:function(instance){var loaded=[],registered,i;for(i=0;i<w.footable.plugins.registered.length;i++){try{registered=w.footable.plugins.registered[i];loaded.push(new registered(instance));}catch(err){if(w.footable.options.debug===true)console.error(err);}}
return loaded;},init:function(instance){for(var i=0;i<instance.plugins.length;i++){try{instance.plugins[i]['init'](instance);}catch(err){if(w.footable.options.debug===true)console.error(err);}}}}};var instanceCount=0;$.fn.footable=function(options){options=options||{};var o=$.extend(true,{},w.footable.options,options);return this.each(function(){instanceCount++;var footable=new Footable(this,o,instanceCount);$(this).data('footable',footable);});};function Timer(){var t=this;t.id=null;t.busy=false;t.start=function(code,milliseconds){if(t.busy){return;}
t.stop();t.id=setTimeout(function(){code();t.id=null;t.busy=false;},milliseconds);t.busy=true;};t.stop=function(){if(t.id!==null){clearTimeout(t.id);t.id=null;t.busy=false;}};}
function Footable(t,o,id){var ft=this;ft.id=id;ft.table=t;ft.options=o;ft.breakpoints=[];ft.breakpointNames='';ft.columns={};ft.plugins=w.footable.plugins.load(ft);var opt=ft.options,cls=opt.classes,evt=opt.events,trg=opt.triggers,indexOffset=0;ft.timers={resize:new Timer(),register:function(name){ft.timers[name]=new Timer();return ft.timers[name];}};ft.init=function(){var $window=$(w),$table=$(ft.table);w.footable.plugins.init(ft);if($table.hasClass(cls.loaded)){ft.raise(evt.alreadyInitialized);return;}
ft.raise(evt.initializing);$table.addClass(cls.loading);$table.find(opt.columnDataSelector).each(function(){var data=ft.getColumnData(this);ft.columns[data.index]=data;});for(var name in opt.breakpoints){ft.breakpoints.push({'name':name,'width':opt.breakpoints[name]});ft.breakpointNames+=(name+' ');}
ft.breakpoints.sort(function(a,b){return a['width']-b['width'];});$table.unbind(trg.initialize).bind(trg.initialize,function(){$table.removeData('footable_info');$table.data('breakpoint','');$table.trigger(trg.resize);$table.removeClass(cls.loading);$table.addClass(cls.loaded).addClass(cls.main);ft.raise(evt.initialized);}).unbind(trg.redraw).bind(trg.redraw,function(){ft.redraw();}).unbind(trg.resize).bind(trg.resize,function(){ft.resize();}).unbind(trg.expandFirstRow).bind(trg.expandFirstRow,function(){$table.find(opt.toggleSelector).first().not('.'+cls.detailShow).trigger(trg.toggleRow);}).unbind(trg.expandAll).bind(trg.expandAll,function(){$table.find(opt.toggleSelector).not('.'+cls.detailShow).trigger(trg.toggleRow);}).unbind(trg.collapseAll).bind(trg.collapseAll,function(){$table.find('.'+cls.detailShow).trigger(trg.toggleRow);});$table.trigger(trg.initialize);$window.bind('resize.footable',function(){ft.timers.resize.stop();ft.timers.resize.start(function(){ft.raise(trg.resize);},opt.delay);});};ft.addRowToggle=function(){if(!opt.addRowToggle)return;var $table=$(ft.table),hasToggleColumn=false;$table.find('span.'+cls.toggle).remove();for(var c in ft.columns){var col=ft.columns[c];if(col.toggle){hasToggleColumn=true;var selector='> tbody > tr:not(.'+cls.detail+',.'+cls.disabled+') > td:nth-child('+(parseInt(col.index,10)+1)+'),'+'> tbody > tr:not(.'+cls.detail+',.'+cls.disabled+') > th:nth-child('+(parseInt(col.index,10)+1)+')';$table.find(selector).not('.'+cls.detailCell).prepend($(opt.toggleHTMLElement).addClass(cls.toggle));return;}}
if(!hasToggleColumn){$table.find('> tbody > tr:not(.'+cls.detail+',.'+cls.disabled+') > td:first-child').add('> tbody > tr:not(.'+cls.detail+',.'+cls.disabled+') > th:first-child').not('.'+cls.detailCell).prepend($(opt.toggleHTMLElement).addClass(cls.toggle));}};ft.setColumnClasses=function(){var $table=$(ft.table);for(var c in ft.columns){var col=ft.columns[c];if(col.className!==null){var selector='',first=true;$.each(col.matches,function(m,match){if(!first)selector+=', ';selector+='> tbody > tr:not(.'+cls.detail+') > td:nth-child('+(parseInt(match,10)+1)+')';first=false;});$table.find(selector).not('.'+cls.detailCell).addClass(col.className);}}};ft.bindToggleSelectors=function(){var $table=$(ft.table);if(!ft.hasAnyBreakpointColumn())return;$table.find(opt.toggleSelector).unbind(trg.toggleRow).bind(trg.toggleRow,function(e){var $row=$(this).is('tr')?$(this):$(this).parents('tr:first');ft.toggleDetail($row);});$table.find(opt.toggleSelector).unbind('click.footable').bind('click.footable',function(e){if($table.is('.breakpoint')&&$(e.target).is('td,th,.'+cls.toggle)){$(this).trigger(trg.toggleRow);}});};ft.parse=function(cell,column){var parser=opt.parsers[column.type]||opt.parsers.alpha;return parser(cell);};ft.getColumnData=function(th){var $th=$(th),hide=$th.data('hide'),index=$th.index();hide=hide||'';hide=jQuery.map(hide.split(','),function(a){return jQuery.trim(a);});var data={'index':index,'hide':{},'type':$th.data('type')||'alpha','name':$th.data('name')||$.trim($th.text()),'ignore':$th.data('ignore')||false,'toggle':$th.data('toggle')||false,'className':$th.data('class')||null,'matches':[],'names':{},'group':$th.data('group')||null,'groupName':null,'isEditable':$th.data('editable')};if(data.group!==null){var $group=$(ft.table).find('> thead > tr.footable-group-row > th[data-group="'+data.group+'"], > thead > tr.footable-group-row > td[data-group="'+data.group+'"]').first();data.groupName=ft.parse($group,{'type':'alpha'});}
var pcolspan=parseInt($th.prev().attr('colspan')||0,10);indexOffset+=pcolspan>1?pcolspan-1:0;var colspan=parseInt($th.attr('colspan')||0,10),curindex=data.index+indexOffset;if(colspan>1){var names=$th.data('names');names=names||'';names=names.split(',');for(var i=0;i<colspan;i++){data.matches.push(i+curindex);if(i<names.length)data.names[i+curindex]=names[i];}}else{data.matches.push(curindex);}
data.hide['default']=($th.data('hide')==="all")||($.inArray('default',hide)>=0);var hasBreakpoint=false;for(var name in opt.breakpoints){data.hide[name]=($th.data('hide')==="all")||($.inArray(name,hide)>=0);hasBreakpoint=hasBreakpoint||data.hide[name];}
data.hasBreakpoint=hasBreakpoint;var e=ft.raise(evt.columnData,{'column':{'data':data,'th':th}});return e.column.data;};ft.getViewportWidth=function(){return window.innerWidth||(document.body?document.body.offsetWidth:0);};ft.calculateWidth=function($table,info){if(jQuery.isFunction(opt.calculateWidthOverride)){return opt.calculateWidthOverride($table,info);}
if(info.viewportWidth<info.width)info.width=info.viewportWidth;if(info.parentWidth<info.width)info.width=info.parentWidth;return info;};ft.hasBreakpointColumn=function(breakpoint){for(var c in ft.columns){if(ft.columns[c].hide[breakpoint]){if(ft.columns[c].ignore){continue;}
return true;}}
return false;};ft.hasAnyBreakpointColumn=function(){for(var c in ft.columns){if(ft.columns[c].hasBreakpoint){return true;}}
return false;};ft.resize=function(){var $table=$(ft.table);if(!$table.is(':visible')){return;}
if(!ft.hasAnyBreakpointColumn()){$table.trigger(trg.redraw);return;}
var info={'width':$table.width(),'viewportWidth':ft.getViewportWidth(),'parentWidth':$table.parent().width()};info=ft.calculateWidth($table,info);var pinfo=$table.data('footable_info');$table.data('footable_info',info);ft.raise(evt.resizing,{'old':pinfo,'info':info});if(!pinfo||(pinfo&&pinfo.width&&pinfo.width!==info.width)){var current=null,breakpoint;for(var i=0;i<ft.breakpoints.length;i++){breakpoint=ft.breakpoints[i];if(breakpoint&&breakpoint.width&&info.width<=breakpoint.width){current=breakpoint;break;}}
var breakpointName=(current===null?'default':current['name']),hasBreakpointFired=ft.hasBreakpointColumn(breakpointName),previousBreakpoint=$table.data('breakpoint');$table.data('breakpoint',breakpointName).removeClass('default breakpoint').removeClass(ft.breakpointNames).addClass(breakpointName+(hasBreakpointFired?' breakpoint':''));if(breakpointName!==previousBreakpoint){$table.trigger(trg.redraw);ft.raise(evt.breakpoint,{'breakpoint':breakpointName,'info':info});}}
ft.raise(evt.resized,{'old':pinfo,'info':info});};ft.redraw=function(){ft.addRowToggle();ft.bindToggleSelectors();ft.setColumnClasses();var $table=$(ft.table),breakpointName=$table.data('breakpoint'),hasBreakpointFired=ft.hasBreakpointColumn(breakpointName);$table.find('> tbody > tr:not(.'+cls.detail+')').data('detail_created',false).end().find('> thead > tr:last-child > th').each(function(){var data=ft.columns[$(this).index()],selector='',first=true;$.each(data.matches,function(m,match){if(!first){selector+=', ';}
var count=match+1;selector+='> tbody > tr:not(.'+cls.detail+') > td:nth-child('+count+')';selector+=', > tfoot > tr:not(.'+cls.detail+') > td:nth-child('+count+')';selector+=', > colgroup > col:nth-child('+count+')';first=false;});selector+=', > thead > tr[data-group-row="true"] > th[data-group="'+data.group+'"]';var $column=$table.find(selector).add(this);if(breakpointName!==''){if(data.hide[breakpointName]===false)$column.addClass('footable-visible').show();else $column.removeClass('footable-visible').hide();}
if($table.find('> thead > tr.footable-group-row').length===1){var $groupcols=$table.find('> thead > tr:last-child > th[data-group="'+data.group+'"]:visible, > thead > tr:last-child > th[data-group="'+data.group+'"]:visible'),$group=$table.find('> thead > tr.footable-group-row > th[data-group="'+data.group+'"], > thead > tr.footable-group-row > td[data-group="'+data.group+'"]'),groupspan=0;$.each($groupcols,function(){groupspan+=parseInt($(this).attr('colspan')||1,10);});if(groupspan>0)$group.attr('colspan',groupspan).show();else $group.hide();}}).end().find('> tbody > tr.'+cls.detailShow).each(function(){ft.createOrUpdateDetailRow(this);});$table.find("[data-bind-name]").each(function(){ft.toggleInput(this);});$table.find('> tbody > tr.'+cls.detailShow+':visible').each(function(){var $next=$(this).next();if($next.hasClass(cls.detail)){if(!hasBreakpointFired)$next.hide();else $next.show();}});$table.find('> thead > tr > th.footable-last-column, > tbody > tr > td.footable-last-column').removeClass('footable-last-column');$table.find('> thead > tr > th.footable-first-column, > tbody > tr > td.footable-first-column').removeClass('footable-first-column');$table.find('> thead > tr, > tbody > tr').find('> th.footable-visible:last, > td.footable-visible:last').addClass('footable-last-column').end().find('> th.footable-visible:first, > td.footable-visible:first').addClass('footable-first-column');ft.raise(evt.redrawn);};ft.toggleDetail=function(row){var $row=(row.jquery)?row:$(row),$next=$row.next();if($row.hasClass(cls.detailShow)){$row.removeClass(cls.detailShow);if($next.hasClass(cls.detail))$next.hide();ft.raise(evt.rowCollapsed,{'row':$row[0]});}else{ft.createOrUpdateDetailRow($row[0]);$row.addClass(cls.detailShow).next().show();ft.raise(evt.rowExpanded,{'row':$row[0]});}};ft.removeRow=function(row){var $row=(row.jquery)?row:$(row);if($row.hasClass(cls.detail)){$row=$row.prev();}
var $next=$row.next();if($row.data('detail_created')===true){$next.remove();}
$row.remove();ft.raise(evt.rowRemoved);};ft.appendRow=function(row){var $row=(row.jquery)?row:$(row);$(ft.table).find('tbody').append($row);ft.redraw();};ft.getColumnFromTdIndex=function(index){var result=null;for(var column in ft.columns){if($.inArray(index,ft.columns[column].matches)>=0){result=ft.columns[column];break;}}
return result;};ft.createOrUpdateDetailRow=function(actualRow){var $row=$(actualRow),$next=$row.next(),$detail,values=[];if($row.data('detail_created')===true)return true;if($row.is(':hidden'))return false;ft.raise(evt.rowDetailUpdating,{'row':$row,'detail':$next});$row.find('> td:hidden').each(function(){var index=$(this).index(),column=ft.getColumnFromTdIndex(index),name=column.name;if(column.ignore===true)return true;if(index in column.names)name=column.names[index];var bindName=$(this).attr("data-bind-name");if(bindName!=null&&$(this).is(':empty')){var bindValue=$('.'+cls.detailInnerValue+'['+'data-bind-value="'+bindName+'"]');$(this).html($(bindValue).contents().detach());}
var display;if(column.isEditable!==false&&(column.isEditable||$(this).find(":input").length>0)){if(bindName==null){bindName="bind-"+$.now()+"-"+index;$(this).attr("data-bind-name",bindName);}
display=$(this).contents().detach();}
if(!display)display=$(this).contents().clone(true,true);values.push({'name':name,'value':ft.parse(this,column),'display':display,'group':column.group,'groupName':column.groupName,'bindName':bindName});return true;});if(values.length===0)return false;var colspan=$row.find('> td:visible').length;var exists=$next.hasClass(cls.detail);if(!exists){$next=$('<tr class="'+cls.detail+'"><td class="'+cls.detailCell+'"><div class="'+cls.detailInner+'"></div></td></tr>');$row.after($next);}
$next.find('> td:first').attr('colspan',colspan);$detail=$next.find('.'+cls.detailInner).empty();opt.createDetail($detail,values,opt.createGroupedDetail,opt.detailSeparator,cls);$row.data('detail_created',true);ft.raise(evt.rowDetailUpdated,{'row':$row,'detail':$next});return!exists;};ft.raise=function(eventName,args){if(ft.options.debug===true&&$.isFunction(ft.options.log))ft.options.log(eventName,'event');args=args||{};var def={'ft':ft};$.extend(true,def,args);var e=$.Event(eventName,def);if(!e.ft){$.extend(true,e,def);}
$(ft.table).trigger(e);return e;};ft.reset=function(){var $table=$(ft.table);$table.removeData('footable_info').data('breakpoint','').removeClass(cls.loading).removeClass(cls.loaded);$table.find(opt.toggleSelector).unbind(trg.toggleRow).unbind('click.footable');$table.find('> tbody > tr').removeClass(cls.detailShow);$table.find('> tbody > tr.'+cls.detail).remove();ft.raise(evt.reset);};ft.toggleInput=function(column){var bindName=$(column).attr("data-bind-name");if(bindName!=null){var bindValue=$('.'+cls.detailInnerValue+'['+'data-bind-value="'+bindName+'"]');if(bindValue!=null){if($(column).is(":visible")){if(!$(bindValue).is(':empty'))$(column).html($(bindValue).contents().detach());}else if(!$(column).is(':empty')){$(bindValue).html($(column).contents().detach());}}}};ft.init();return ft;}})(jQuery,window);(function($,w,undefined){if(w.footable===undefined||w.footable===null)
throw new Error('Please check and make sure footable.js is included in the page and is loaded prior to this script.');var defaults={filter:{enabled:true,input:'.footable-filter',timeout:300,minimum:2,disableEnter:false,filterFunction:function(index){var $t=$(this),$table=$t.parents('table:first'),filter=$table.data('current-filter').toUpperCase(),text=$t.find('td').text();if(!$table.data('filter-text-only')){$t.find('td[data-value]').each(function(){text+=$(this).data('value');});}
return text.toUpperCase().indexOf(filter)>=0;}}};function Filter(){var p=this;p.name='Footable Filter';p.init=function(ft){p.footable=ft;if(ft.options.filter.enabled===true){if($(ft.table).data('filter')===false)return;ft.timers.register('filter');$(ft.table).unbind('.filtering').bind({'footable_initialized.filtering':function(e){var $table=$(ft.table);var data={'input':$table.data('filter')||ft.options.filter.input,'timeout':$table.data('filter-timeout')||ft.options.filter.timeout,'minimum':$table.data('filter-minimum')||ft.options.filter.minimum,'disableEnter':$table.data('filter-disable-enter')||ft.options.filter.disableEnter};if(data.disableEnter){$(data.input).keypress(function(event){if(window.event)
return(window.event.keyCode!==13);else
return(event.which!==13);});}
$table.bind('footable_clear_filter',function(){$(data.input).val('');p.clearFilter();});$table.bind('footable_filter',function(event,args){p.filter(args.filter);});$(data.input).keyup(function(eve){ft.timers.filter.stop();if(eve.which===27){$(data.input).val('');}
ft.timers.filter.start(function(){var val=$(data.input).val()||'';p.filter(val);},data.timeout);});},'footable_redrawn.filtering':function(e){var $table=$(ft.table),filter=$table.data('filter-string');if(filter){p.filter(filter);}}}).data('footable-filter',p);}};p.filter=function(filterString){var ft=p.footable,$table=$(ft.table),minimum=$table.data('filter-minimum')||ft.options.filter.minimum,clear=!filterString;var event=ft.raise('footable_filtering',{filter:filterString,clear:clear});if(event&&event.result===false)return;if(event.filter&&event.filter.length<minimum){return;}
if(event.clear){p.clearFilter();}else{var filters=event.filter.split(' ');$table.find('> tbody > tr').hide().addClass('footable-filtered');var rows=$table.find('> tbody > tr:not(.footable-row-detail)');$.each(filters,function(i,f){if(f&&f.length>0){$table.data('current-filter',f);rows=rows.filter(ft.options.filter.filterFunction);}});rows.each(function(){p.showRow(this,ft);$(this).removeClass('footable-filtered');});$table.data('filter-string',event.filter);ft.raise('footable_filtered',{filter:event.filter,clear:false});}};p.clearFilter=function(){var ft=p.footable,$table=$(ft.table);$table.find('> tbody > tr:not(.footable-row-detail)').removeClass('footable-filtered').each(function(){p.showRow(this,ft);});$table.removeData('filter-string');ft.raise('footable_filtered',{clear:true});};p.showRow=function(row,ft){var $row=$(row),$next=$row.next(),$table=$(ft.table);if($row.is(':visible'))return;if($table.hasClass('breakpoint')&&$row.hasClass('footable-detail-show')&&$next.hasClass('footable-row-detail')){$row.add($next).show();ft.createOrUpdateDetailRow(row);}
else $row.show();};}
w.footable.plugins.register(Filter,defaults);})(jQuery,window);