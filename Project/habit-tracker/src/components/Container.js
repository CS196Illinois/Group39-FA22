import React, { Component } from "react";
import { Modal } from "./Modal.js";
import TriggerButton from "./TriggerButton.js";

export class Container extends Component {
  
  state = { isShown: false };
  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
    this.toggleScrollLock();
  };
  closeModal = () => {
    this.setState({ isShown: false });
    this.TriggerButton.focus();
    this.toggleScrollLock();
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.closeModal();
    console.log("inside onSubmit");
  }
  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };
  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  toggleScrollLock = () => {
    document.querySelector("html").classList.toggle("scroll-lock");
  };
  
  render() {
    return (
      <React.Fragment>
        <TriggerButton
          showModal={this.showModal}
          buttonRef={(n) => (this.TriggerButton = n)}
          triggerText={this.props.triggerText}
        />
        {this.state.isShown ? (
          <Modal
            //onSubmit={this.props.onSubmit}
            onSubmit={this.onSubmit}
            modalRef={(n) => (this.modal = n)}
            onKeyDown={this.onKeyDown}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onClickOutside={this.onClickOutside}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Container;
