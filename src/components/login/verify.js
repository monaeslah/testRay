import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import InputMask from 'react-input-mask';
import { connect } from "react-redux";
import { AiFillMessage, AiOutlineGoogle } from "react-icons/ai";
import { IoIosRefresh } from "react-icons/io";
import Icon from "components/login/icon";

class Verify extends Component {
    state = {
        continue: false,
        intervalId: null,
        timer: 10,
        code: null,
        next: false
    };
    handleInput = (e) => {
        if (e.target.value.replace(/\s|━/g, '').length === 6) {
            this.setState({
                continue: true,
                code: e.target.value.replace(/\s|━/g, '')
            })
        } else {
            this.setState({
                continue: false
            })
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.timer === 0) {
            clearInterval(this.state.intervalId)
        }
    }

    componentDidMount() {
        let intervalId = setInterval(this.timer, 1000);
        this.setState({ intervalId: intervalId });
    }

    timer = () => {
        this.setState({
            timer: this.state.timer - 1
        })
    };
    sendCode = (e) => {
        e.preventDefault();
        this.setState({
            next: true
        })
    };

    render() {
        if (this.state.next) {
            return <Redirect to="/info" />
        }
        return (
            <>
                <div className="container">

                    <form onSubmit={this.sendCode} className="row justify-content-center mt-5">
                        <div className="col-12 col-md-10 col-lg-8 text-right">
                            <div className="">
                                <Icon />
                            </div>
                            <div className="mt-5">
                                <p className="caption-dark-bold pt-3">کد تایید</p>
                            </div>
                            <p className="mt-3 text-MainColor">
                                <span className="font-weight-bold">s.sher.art@gmail.com</span>
                                <button
                                    type="button"
                                    onClick={this.props.changeNumber}
                                    className="submit-btn-silver-border py-1 px-2 w-auto d-inline-block mr-2">ویرایش
                                </button>
                            </p>
                            <p className="mt-3 text-color">
                                به رایچت خوش آمدید لطفا کد ارسال شده به ایمیلتان را وارد کنید
                            </p>
                            <form action="" dir="ltr" className="mt-4">
                                <div className="inputBox mb-4 text-center">
                                    <InputMask mask="*  *  *  *  *  *" value={this.props.value} maskChar={'━'}
                                        alwaysShowMask={true}
                                        onChange={this.handleInput}>
                                        {(props) => <input type="tel"
                                            className="input-style-public-border text-center font-size-13"
                                            placeholder=""
                                            onChange={props.onChange}

                                        />}
                                    </InputMask>
                                </div>
                            </form>
                            <div className="text-center mt-4 d-flex align-items-center justify-content-between">
                                <span className="text-color">
                                    <span className="timer text-MainColor font-weight-bold" style={{ minWidth: '22px' }}>
                                        {this.state.timer}
                                    </span>
                                    <span className="mr-1">ثانیه</span>
                                </span>

                                <button disabled={this.state.timer !== 0}
                                    type="button"
                                    onClick={this.props.sendNumber}
                                    className={`pr-2 ${(this.state.timer !== 0 && 'text-gray')}`}
                                >
                                    <span className="ml-2"><IoIosRefresh /></span>
                                    ارسال دوباره کد تایید
                                </button>
                            </div>
                            <button type="submit" onClick={this.sendCode}

                                className={`${this.state.continue ? 'submit-btn' : 'submit-btn-silver'}  mt-3`}>تایید
                                کد
                                ارسالی
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


                    </form>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
};
const mapStateToProps = (store) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
