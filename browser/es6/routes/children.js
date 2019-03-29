import {default as geometry} from "./pages/geometry.vue";
import {default as test} from "./pages/test.vue";

export default [{
    path: '/geometry',
    name: 'geometry',
    component: geometry,
    meta: { title: route => "Geometry View" },
    props: true
},{
    path: '/test',
    name: 'test',
    component: test,
    meta: { title: route => "test" },
    props: true

}];
