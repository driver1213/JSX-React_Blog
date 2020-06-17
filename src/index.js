//import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

//create a react component
const App = () => {
    
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                        Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard >
            <CommentDetail 
                author= "Michelle" 
                time="Today at 4 pm" 
                comments="Hey little yo!" 
                avatar={faker.image.avatar()} 
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author= "Jean" 
                time="Today at 2 pm" 
                comments="Hi daddy!"
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author= "Diego" 
                time="Today at 11 pm" 
                comments="My girls, love you!"
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>
        </div>
    )
}

//take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)