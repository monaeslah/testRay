import React, { Component } from 'react';
import Icon from "components/login/icon";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { FiLock, FiEyeOff } from "react-icons/fi";
import Select from 'react-select';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
class Info extends Component {
    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="d-flex align-items-center justify-content-between">
                        <Icon />
                        <span>
                            <span>s.sher.art@gmail.com</span>
                            <span className="mr-2 text-green"><AiFillCheckCircle /></span>

                        </span>
                    </div>
                    <div className="row text-right mt-5">
                        <div className="col-12">
                            <div className="caption-dark-bold"><BsReverseLayoutTextSidebarReverse /></div>
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            <input type="text"
                                onChange={this.changeInput}
                                placeholder="نام شرکت ، مثال :دیجیکالا"
                                className={`input-style-public-border text-right px-2  py-2 ${1 && 'border-red'}`} />
                            {1 ? <span className="text-pink font-size-08">آدرس وبسایت وارد شده صحیح نمی باشد</span> : ''}
                        </div>

                        <div className="col-12 col-md-6 mt-3">
                            <Select
                                placeholder="تعداد کارکنان"
                                className="input-style-public-border text-right "
                                options={options} />
                        </div>

                        <div className="col-12 col-md-6 mt-3">
                            <input type="url"
                                onChange={this.changeInput}
                                placeholder="آدرس وبسایت"
                                className="input-style-public-border text-right px-2  py-2" />
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            <Select
                                placeholder="زمینه فعالیت"
                                className="input-style-public-border text-right "
                                options={options} />
                        </div>
                        <div className="col-12 mt-5">
                            <div className="caption-dark-bold d-flex align-items-center"><FiLock />
                                <span className=" mr-2">کلمه عبور</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            <span className="position-relative">
                                <input type="url"
                                    onChange={this.changeInput}
                                    placeholder="حداقل 6 کاراکتر با حروف و اعداد کوچک و بزرگ"
                                    className="input-style-public-border text-right px-2  py-2" />
                                <span className="iconLogin"><FiEyeOff /></span>
                            </span>
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            <span className="position-relative">
                                <input type="url"
                                    onChange={this.changeInput}
                                    placeholder="تکرار کلمه عبور"
                                    className="input-style-public-border text-right px-2  py-2" />
                                <span className="iconLogin"><FiEyeOff /></span>
                            </span>
                        </div>
                        <div className="col-12 mt-5">
                            <button type="submit"
                                className="submit-btn w-auto px-5 d-inline-block py-2">
                                ثبت نام
                            </button>
                            <button type="submit"
                                className="submit-btn-border w-auto px-5  d-inline-block py-2 mr-4">
                                مرحله قبل
                            </button>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default Info;
