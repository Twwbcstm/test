import Tabs from './TabsView.vue';
import Tab from './TabView.vue';
function install(app){
    app.component('myTabs',Tabs);
    app.component('myTab',Tab);

}

export default install;