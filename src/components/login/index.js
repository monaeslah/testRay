import React, { Component } from 'react';
import rightPic from 'images/login/Group 5110.png';
import { FaMobileAlt } from "react-icons/fa";
import { AiFillMessage, AiOutlineGoogle } from "react-icons/ai";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Verify from "components/login/verify";
import LoadingIcon from "components/publicComponents/loadingIcon";
import { Spin } from "antd";
import Icon from "components/login/icon";
class Index extends Component {
    state = {
        goNext: false,
        number: null,
        checked: true,
    };


    sendNumber = (e) => {
        e.preventDefault();
        this.setState({
            goNext: true,
        })
    };
    changeNumber = () => {
        this.setState({
            goNext: false
        })
    };
    changeInput = (e) => {
    };
    checkBox = () => {
        this.setState({
            checked: !this.state.checked
        })
    };

    render() {

        if (this.props.location.pathname !== "/login") {
            return <Redirect to="/login" />
        }
        return (
            <>
                <Spin size="large" spinning={false} indicator={<LoadingIcon />}>
                    <div className="container-fluid px-0">

                        <div className="row mx-0">


                            <div className="col-12 col-md-6 px-0">
                                {
                                    !this.state.goNext ?
                                        <form onSubmit={this.sendNumber}
                                            className="container ">

                                            <div className="row justify-content-center mt-5">
                                                <div className="col-12 col-md-10 col-lg-8 text-right">
                                                    <div className="">
                                                        <Icon />
                                                    </div>
                                                    <div className="mt-5">
                                                        <p className="caption-dark-bold pt-3">ثبت نام</p>
                                                    </div>
                                                    <p className="mt-3 text-color">
                                                        حساب کاربری دارید ؟
                                            <a className="text-MainColor font-weight-bold" href="#"> وارد شوید </a>
                                                    </p>
                                                    <p className="mt-3 text-color">
                                                        برای دریافت کد تایید ایمیل خود را وارد نمایید
                                        </p>
                                                    <div className="mt-3">
                                                        <input type="email" dir="ltr" ref={t => this.number = t}
                                                            autoComplete="on"
                                                            onChange={this.changeInput}
                                                            defaultValue={this.state.number}
                                                            placeholder="ایمیل"
                                                            className="input-style-public-border text-right px-2 font-size-12 py-2" />
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        disabled={(!this.state.checked)}
                                                        className={`${(this.state.checked) ? 'submit-btn' : 'submit-btn-silver'}  mt-5 `}
                                                        onClick={this.sendNumber}>ارسال کد تایید
                                        </button>
                                                    <p className="text-color text-center my-4 or">
                                                        <span className="bg-white position-relative px-2">یا</span>
                                                    </p>
                                                    <button
                                                        type="button"
                                                        className="submit-btn-blue px-3 d-flex align-items-center justify-content-between "
                                                        onClick={this.sendNumber}>
                                                        <span>ثبت نام با حساب کاربری گوگل</span>
                                                        <span><AiOutlineGoogle /></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        :
                                        <Verify sendNumber={this.sendNumber} changeNumber={this.changeNumber} />

                                }
                            </div>
                            <div className="col-6 px-0 d-none d-md-block">
                                {/*<img src={rightPic} alt=""/>*/}
                                <div className="img-right" style={{ backgroundImage: `url("${rightPic}")` }} />
                                <div className="icon-player">
                                <img src={require('../../images/login/player.png')}  alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </Spin>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}
const mapStateToProps = (store) => {
    return {
        infoGetOtp: store.infoGetOtp,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
