export default angular
	.module("rWorks", [])
	.component("resumeWorks", {
		templateUrl : "components/rWorks/cmpt.html",
		controller  : ResumeWorksCtrl
	})
	.directive("switchWork",[
		"actionEvent",
		function(actionEvent){
			function link($scope,ele,attr) {
				let worksContain = document.body.querySelector(".-work-list");
                let rotate = 0;
                ele[0].addEventListener(actionEvent.event.start,switchWorkHandler);

                function switchWorkHandler(evt){

                	if(evt.target.nodeName !== "I"){
                		return;
					}
					rotate += evt.target.className == "-left"?90:-90;

                    worksContain.style.transform ="rotateY("+rotate+"deg)";
				}

			}
			return{
				link:link
			}
		}
	])
	.name;

ResumeWorksCtrl.$inject = ["dataExtend","resumeData","$rootScope","$scope"];

function ResumeWorksCtrl(dataExtend,resumeData,$rootScope, $scope) {
    let vm = this;
	let clientWidth = document.body.clientWidth;
	if (clientWidth > 600 && clientWidth < 880) {
		resumeData.cn.works.worksList = resumeData.cn.works.worksList.slice(0,1)
	} else if (clientWidth > 880) {
		resumeData.cn.works.worksList = resumeData.cn.works.worksList.slice(0,2)
	}
    dataExtend.extend(vm, resumeData.cn.works);

    $rootScope.$on("switchLang",function(evt,data){

		let extendData = Number(data) == 2?resumeData.en.works:resumeData.cn.works;
		
		if (clientWidth > 600 && clientWidth < 880) {
			extendData.worksList = extendData.worksList.slice(0,1)
		} else if (clientWidth > 880) {
			extendData.worksList = extendData.worksList.slice(0,2)
		}

        vm.isEng = Number(data) == 2;

        dataExtend.extend(vm, extendData);
	
	    $scope.$apply();
    });
}