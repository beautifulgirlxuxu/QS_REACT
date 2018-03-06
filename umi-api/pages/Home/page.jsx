import * as React from 'react';
import router from 'umi/router';
export default class extends React.Component{
    constructor(props){
        super(props);
        if(window.location.pathname.indexOf('/Home') < 0) {
            router.replace('/Home');
            return;
        }
    }
    render(){
        return (
            <div></div>
        )
    }
}