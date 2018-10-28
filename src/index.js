/**
 * 入口文件
 */
import appServices from "./app/service";
import zrbResume from "./components/zrbResume/cmpt";

angular.module("bootstrap", [
	appServices,
	zrbResume
]);