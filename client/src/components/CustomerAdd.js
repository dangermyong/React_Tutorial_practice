import React from 'react';
import { post } from 'axios';

class CustomerAdd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      file: null,
      userName: '',
      birthday: '',
      gender:'',
      job: '',
      fileName: ''
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h1>고객 추가</h1>
        프로필 이미지 : <input type='file' name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
        이름 : <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
        생년월일 : <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>

        
      </form>
    )
  }
}