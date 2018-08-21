/// write react code in es5///
var NavBar = React.createClass({
    render: function(){
        return (<nav>
                    <a href="/home"/>
                    <a href="/about"/>
                    <a href="/contact"/>
                </nav>)
    }
})

///with es6////
class NavBar extends React.Component{
    render(){
        return(<nav>
                    <a href="/home"/>
                    <a href="/about"/>
                    <a href="/contact"/>
                </nav>)
    }
}