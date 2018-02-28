import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {FormGroup, FormControl, Row, Col, Grid} from 'react-bootstrap';
import {updateNote} from '../actions';

class UpdateNote extends Component {
    state = {
        title: this.props.note.title,
        description: this.props.note.description,
        tags: this.props.note.tags,
        id: this.props.note.id,
    };

    updateField = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleUpdate = (e) => {
        e.preventDefault();
        this.props.updateNote(this.state);
        console.log('this is the hblde update to go to update', this.props.note);
    };

    render() {
        return (
            <UpdateNoteContainer>
                <Grid>
                    <Row className="show-grid">
                        <Col md={6} className={"col-up"}>
                            <h3 className={'top-title'}>Edit Note:</h3>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={6} className={"col-up"}>
                            <form>
                                <FormGroup>
                                    <FormControl
                                        type="text"
                                        value={this.state.title}
                                        placeholder="Title"
                                        onChange={this.updateField}
                                        name={"title"}
                                    />
                                    <br/>
                                    <FormControl
                                        componentClass="textarea"
                                        type="textarea"
                                        value={this.state.description}
                                        placeholder="Description"
                                        onChange={this.updateField}
                                        name={"description"}
                                    />
                                    <br/>
                                    <FormControl
                                        type="text"
                                        value={this.state.tags}
                                        placeholder="Tags"
                                        onChange={this.updateField}
                                        name={"tags"}
                                    />
                                    <div className={"btn-update"}>
                                        <div onClick={(e) => {this.handleUpdate(e)}} className={'btn-side create-new'}>
                                            <div className={"btn-text"}> Update </div>
                                        </div>
                                    </div>
                                </FormGroup>
                            </form>
                        </Col>
                    </Row>
                </Grid>
            </UpdateNoteContainer>
        )}
}

const mapStateToProps = state => {
    const {notes_reducer} = state;
    return {
        note: notes_reducer.singleNote,
    }
};

export default connect(mapStateToProps, {updateNote})(UpdateNote);

const UpdateNoteContainer = styled.div`
    
    border:0px solid black;
    
        .title-form {
            text-align:center;
            padding:0px;
        }

        .col-up {
            // margin:0px auto;
        }

        .btn-update{
            text-align:center;
            margin-top:15px;
        }
        
        .create-new{
            width:65%
        }
`;