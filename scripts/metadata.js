define(function(){
    return {
        pageGroups: [{"id":"2af13075-f30b-ac73-de23-c39cbcbd8ffa","name":"Default group","pages":[{"id":"e407aaec-e4cc-7edf-44d9-8792e36ccd1d","name":"Templates"},{"id":"d4537ebe-ee67-c484-c4b5-7bffe52764fe","name":"Template editor"},{"id":"69591b6b-8a22-b52d-342c-8d5ac74f5b6d","name":"Schedule"},{"id":"d7aa5df6-579e-228a-b5a1-165a3fdd9c9a","name":"Loops"},{"id":"8c98094e-d06e-87f4-1a56-30d65ed3ba1b","name":"Calendar"},{"id":"37752f33-2f66-c61f-6774-ac54e2b0761a","name":"Loops/Calendar"}]}],
        downloadLink: "//services.ninjamock.com/html/htmlExport/download?shareCode=3JJXD&projectName=SiteCharacter",
        startupPageId: 0,

        forEachPage: function(func, thisArg){
        	for (var i = 0, l = this.pageGroups.length; i < l; ++i){
                var group = this.pageGroups[i];
                for (var j = 0, k = group.pages.length; j < k; ++j){
                    var page = group.pages[j];
                    if (func.call(thisArg, page) === false){
                    	return;
                    }
                }
            }
        },
        findPageById: function(pageId){
        	var result;
        	this.forEachPage(function(page){
        		if (page.id === pageId){
        			result = page;
        			return false;
        		}
        	});
        	return result;
        }
    }
});
