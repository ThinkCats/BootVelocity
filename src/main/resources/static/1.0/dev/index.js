
var TopicList = React.createClass({

    getInitialState:function(){
        return {list:[]}
    },
    componentDidMount:function(){
        $.ajax({
            url:'/topic/list',
            dataType:'json',
            success:function(data){
                this.setState({list:data});
            }.bind(this)
        });
    },
    render:function(){
        var topicItem = this.state.list.map(function(item){
            return (
                <TopicItem item={item} key={item.topicId} ></TopicItem>
            )
        });
        return (
            <div className="list-group">
                {topicItem}
            </div>
        );
    }
});

var TopicItem = React.createClass({
    render:function(){
        var data = this.props.item;
        return (
            <div className="list-group-item">
                <div className="list-group-item-text">
                    <div className="text-left">
                        <a href="#">{data.name}</a>
                    </div>
                    <div className="text-center">{data.content}</div>
                </div>
            </div>
        );
    }
});


ReactDOM.render(
    <TopicList />,
    document.getElementById('topic-list')
);

//SideBar
var SideBar = React.createClass({
    render:function(){
        return (
            <div className="list-group-item">
                <a href="/topic/post" className="btn btn-success">发布新帖</a>
            </div>
        );
    }
});

ReactDOM.render(
    <SideBar />,document.getElementById('post-topic')
);


var Hello = React.createClass({
    getInitialState:function(){
        return ({user:{}});
    },
    componentDidMount:function(){
        $.ajax({
            //url:this.props.url,
            dataType:'json',
            success:function(data){
                this.setState({user:data});
            }.bind(this)
        }) ;
    },
    render:function(){
        var user = this.state.user;
        return (
            <div className="list-group-item">
                hello world !!! {user.name} {user.age}
            </div>
        );
    }
});

ReactDOM.render(
    <Hello url="http://localhost:8080/users/user" />,document.getElementById('hello')
    );