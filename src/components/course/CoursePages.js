import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursePages extends Component {
    constructor(props) {
        super(props);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.state = {
            course: {
                title: ""
            }
        };
    }
    onTitleChange(event){
      const course = this.state.course;
      course.title = event.target.value;
      this.setState({course:course});  
    }
    onSaveClick(){
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }
    courseRow(course, index){
        return (
            <div key={index}>{course.title}</div>
        );
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add courses
                </h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}/>
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onSaveClick} />
            </div>
        );
    }
}
CoursePages.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps){
    return {
        courses:state.courses
    };
}

export default connect(mapStateToProps)(CoursePages);