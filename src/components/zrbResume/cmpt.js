import rHeader from "../rHeader/cmpt";
import rFooter from "../rFooter/cmpt";
import rMain from "../rMain/cmpt";

export default angular
	.module("zrbResume", [
		rHeader,
		rFooter,
		rMain
	])
	.component("zrbResume", {
		templateUrl : "components/zrbResume/cmpt.html",
		controllerAs: "zr",
		controller  : ZrbResumeCtrl
	})
	.name;

function ZrbResumeCtrl() {}