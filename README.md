# vue-sip-waypoint

## Project setup
```
yarn add https://github.com/voffkin/vue-sip-waypoint.git
```

main.js
```
import { Waypoint } from 'vue-sip-waypoint';
Vue.component('Waypoint', Waypoint);
```

App.vue
```vue
<div>
    <Waypoint entryOffset="80%" leaveOffset="20%" @entry="onEntry" @leave="onLeave" :id="id" >
        <div>
            ....
        </div>
    </Waypoint>
</div>
    
```
