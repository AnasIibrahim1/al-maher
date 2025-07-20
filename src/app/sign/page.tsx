"use client"
import ContainerRow from '@/components/Container/ContainerRow'
import React, { useState, useCallback } from 'react'
import Image from "next/image";
import Paragraph from '@/components/Paragraphs/small';
import Input from '@/components/input/input';
import General_Button from '@/components/Buttons/General_Button';

export default function Sign(){
    const [formType, setFormType] = useState<'login' | 'forgot' | 'register' | 'otp' | 'newPassword'>('login');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [registerStep, setRegisterStep] = useState<1 | 2>(1);

    const changeFormType = (newType: 'login' | 'forgot' | 'register' | 'otp' | 'newPassword') => {
        setFormType(newType);
        // مسح البيانات عند تغيير النموذج
        if (newType === 'login') {
            // لا حاجة لمسح البيانات لأنها غير محفوظة في state
        } else if (newType === 'register') {
            setRegisterStep(1);
        } else if (newType === 'otp') {
            setOtp(['', '', '', '']);
        } else if (newType === 'newPassword') {
            // لا حاجة لمسح البيانات لأنها غير محفوظة في state
        }
    };

    const handleOtpChange = useCallback((value: string, index: number) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            setOtp(prev => {
                const newOtp = [...prev];
                newOtp[index] = value;
                
                if (value && index < 3) {
                    setTimeout(() => {
                        const nextInput = document.getElementById(`otp-${index + 1}`);
                        nextInput?.focus();
                    }, 10);
                }
                
                return newOtp;
            });
        }
    }, []);

    const handleOtpKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            prevInput?.focus();
        }
    }, [otp]);

    const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        
        if (email && password) {
            console.log('تسجيل الدخول:', { email, password });
            // هنا يمكن إضافة منطق تسجيل الدخول
        }
    };

    const LoginForm = () => (
        <form style={{ margin: "auto", display: "flex", flexDirection: "column", gap: "20px", width: "60%" }}
              onSubmit={handleLoginSubmit}>
            <Paragraph style={{fontSize: "25px", color: "black", fontWeight: "bold", textAlign: "center"}}>
                تسجيل الدخول
            </Paragraph>
            <Input
                name="email"
                type="email"
                label="البريد الإلكتروني"
                placeholder="أدخل بريدك الإلكتروني"
                width="80%"
                margin="auto"
                padding="20px"
                border="1px solid #169FC6"
                required
            />
            <Input
                name="password"
                label="كلمة المرور" 
                type="password"
                placeholder="أدخل كلمة المرور"
                                width="80%"
                margin="auto"
                padding="20px"
                border="1px solid #169FC6"
                required
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                title="كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، حرف كبير، حرف صغير، رقم، ورمز خاص"
                showPasswordToggle={true}
            />
            <div style={{ textAlign: "left", width: "80%", margin: "auto" }}>
                <Paragraph 
                    style={{
                        fontSize: "14px",
                        color: "#169FC6",
                        cursor: "pointer"
                    }}
                >
                    <span 
                    style={{ color: "#169FC6", cursor: "pointer" }}
                    onClick={() => changeFormType('forgot')}
                >
                    نسيت كلمة المرور؟
                </span>
                </Paragraph>
            </div>
            <General_Button
                text="تسجيل الدخول"
                bgColor="#169FC6"
                color="white"
                width="80%"
                padding="15px"
                margin="10px auto"
            />
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Paragraph style={{ fontSize: "14px", color: "#6D737A" }}>
                    ليس لديك حساب؟{" "}
                    <span 
                        style={{ color: "#169FC6", cursor: "pointer" }}
                        onClick={() => changeFormType('register')}
                    >
                        إنشاء حساب جديد
                    </span>
                </Paragraph>
            </div>
        </form>
    );

    const handleForgotSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        
        if (email) {
            console.log('إرسال رمز التحقق إلى:', email);
            // هنا يمكن إضافة منطق إرسال رمز التحقق
            changeFormType('otp');
        }
    };

    const ForgotPasswordForm = () => (
        <form style={{ margin: "auto", display: "flex", flexDirection: "column", gap: "20px", width: "60%" }}
              onSubmit={handleForgotSubmit}>
            <Paragraph style={{fontSize: "25px", color: "black", fontWeight: "bold", textAlign: "center"}}>
                نسيت كلمة المرور
            </Paragraph>
            <Paragraph style={{fontSize: "14px", color: "#6D737A", textAlign: "center", marginBottom: "20px"}}>
                أدخل بريدك الإلكتروني لعملية التحقق، وسوف نرسل رمزًا مكونًا من 4 أرقام إلى بريدك الإلكتروني.
            </Paragraph>
            <Input
                name="email"
                type="email"
                label="البريد الإلكتروني"
                placeholder="أدخل بريدك الإلكتروني"
                                width="80%"
                margin="auto"
                padding="20px"
                border="1px solid #169FC6"
                required
            />
            <General_Button
                text="إرسال رمز التحقق"
                bgColor="#169FC6"
                color="white"
                width="80%"
                padding="15px"
                margin="10px auto"
            />
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Paragraph style={{ fontSize: "14px", color: "#169FC6", cursor: "pointer" }}>
                    <span 
                        style={{ color: "#169FC6", cursor: "pointer" }}
                        onClick={() => changeFormType('login')}
                    >
                        العودة لتسجيل الدخول
                    </span>
                </Paragraph>
            </div>
        </form>
    );

    const handleOtpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const otpString = otp.join('');
        
        if (otpString.length === 4) {
            console.log('التحقق من الرمز:', otpString);
            // هنا يمكن إضافة منطق التحقق من الرمز
            changeFormType('newPassword');
        } else {
            alert('يرجى إدخال الرمز المكون من 4 أرقام');
        }
    };

    const handleResendOtp = () => {
        console.log('إعادة إرسال الرمز');
        // هنا يمكن إضافة منطق إعادة إرسال الرمز
        setOtp(['', '', '', '']);
    };

    const OTPForm = () => (
        <form style={{ margin: "auto", display: "flex", flexDirection: "column", gap: "20px", width: "60%" }}
              onSubmit={handleOtpSubmit}>
            <Paragraph style={{fontSize: "25px", color: "black", fontWeight: "bold", textAlign: "center"}}>
                رمز التحقق
            </Paragraph>
            <Paragraph style={{fontSize: "14px", color: "#6D737A", textAlign: "center", marginBottom: "20px"}}>
                نحن نكتشف تلقائيًا الرسائل النصية القصيرة المرسلة إلى رقمك
            </Paragraph>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", direction: "ltr" }}>
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        name={`otp-${index}`}
                        id={`otp-${index}`}
                        type="text"
                        value={digit}
                        onChange={(e) => handleOtpChange(e.target.value, index)}
                        onKeyDown={(e) => handleOtpKeyDown(e, index)}
                        style={{
                            width: "50px",
                            height: "50px",
                            textAlign: "center",
                            fontSize: "24px",
                            border: "1px solid #169FC6",
                            borderRadius: "8px",
                            color: "black"
                        }}
                        maxLength={1}
                    />
                ))}
            </div>
            <General_Button
                text="تحقق من الرمز"
                bgColor="#169FC6"
                color="white"
                width="80%"
                padding="15px"
                margin="10px auto"
            />
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Paragraph style={{ fontSize: "14px", color: "#169FC6", cursor: "pointer" }}>
                    <span 
                        style={{ color: "#169FC6", cursor: "pointer" }}
                        onClick={handleResendOtp}
                    >
                        إعادة إرسال الرمز
                    </span>
                </Paragraph>
            </div>
        </form>
    );

    const handleNewPasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const password = formData.get('password') as string;
        const confirmPassword = formData.get('confirmPassword') as string;
        
        if (password && confirmPassword) {
            if (password === confirmPassword) {
                const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                if (passwordPattern.test(password)) {
                    console.log('تحديث كلمة المرور:', password);
                    // هنا يمكن إضافة منطق تحديث كلمة المرور
                    changeFormType('login');
                } else {
                    alert('كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، حرف كبير، حرف صغير، رقم، ورمز خاص');
                }
            } else {
                alert('كلمة المرور وتأكيدها غير متطابقين');
            }
        }
    };

    const NewPasswordForm = () => (
        <form style={{ margin: "auto", display: "flex", flexDirection: "column", gap: "20px", width: "60%" }}
              onSubmit={handleNewPasswordSubmit}>
            <Paragraph style={{fontSize: "25px", color: "black", fontWeight: "bold", textAlign: "center"}}>
                تعيين كلمة المرور الجديدة
            </Paragraph>
            <Input
                name="password"
                label="كلمة المرور الجديدة"
                type="password"
                placeholder="أدخل كلمة المرور الجديدة"
                                width="80%"
                margin="auto"
                padding="20px"
                border="1px solid #169FC6"
                required
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                title="كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، حرف كبير، حرف صغير، رقم، ورمز خاص"
                showPasswordToggle={true}
            />
            <Input
                name="confirmPassword"
                label="تأكيد كلمة المرور"
                type="password"
                placeholder="أعد إدخال كلمة المرور الجديدة"
                                width="80%"
                margin="auto"
                padding="20px"
                border="1px solid #169FC6"
                required
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                title="كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، حرف كبير، حرف صغير، رقم، ورمز خاص"
                showPasswordToggle={true}
            />
            <General_Button
                text="حفظ كلمة المرور الجديدة"
                bgColor="#169FC6"
                color="white"
                width="80%"
                padding="15px"
                margin="10px auto"
            />
        </form>
    );

    const handleRegisterStep1Submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const username = formData.get('username') as string;
        const phone = formData.get('phone') as string;
        const grade = formData.get('grade') as string;
        const age = formData.get('age') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const confirmPassword = formData.get('confirmPassword') as string;
        
        if (username && phone && grade && age && email && password && confirmPassword) {
            if (password === confirmPassword) {
                const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                if (passwordPattern.test(password)) {
                    console.log('البيانات الأساسية:', { username, phone, grade, age, email, password });
                    setRegisterStep(2);
                } else {
                    alert('كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، حرف كبير، حرف صغير، رقم، ورمز خاص');
                }
            } else {
                alert('كلمة المرور وتأكيدها غير متطابقين');
            }
        }
    };

    const handleRegisterStep2Submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const otpString = otp.join('');
        
        if (otpString.length === 4) {
            console.log('التحقق من الرمز:', otpString);
            // هنا يمكن إضافة منطق التحقق من الرمز
            console.log('تم إنشاء الحساب بنجاح!');
            changeFormType('login');
        } else {
            alert('يرجى إدخال الرمز المكون من 4 أرقام');
        }
    };

    const RegisterForm = () => (
        <div style={{ margin: "auto", display: "flex", flexDirection: "column", gap: "20px", width: "60%" }}>
            {/* مؤشر التقدم */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: registerStep >= 1 ? "#169FC6" : "#E5E5E5",
                        color: registerStep >= 1 ? "white" : "#6D737A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold"
                    }}>
                        1
                    </div>
                    <span style={{
                        color: registerStep >= 1 ? "#169FC6" : "#6D737A",
                        fontWeight: registerStep >= 1 ? "bold" : "normal"
                    }}>
                        إنشاء حساب
                    </span>
                </div>
                <div style={{
                    width: "50px",
                    height: "2px",
                    backgroundColor: registerStep >= 2 ? "#169FC6" : "#E5E5E5"
                }}></div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: registerStep >= 2 ? "#169FC6" : "#E5E5E5",
                        color: registerStep >= 2 ? "white" : "#6D737A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold"
                    }}>
                        2
                    </div>
                    <span style={{
                        color: registerStep >= 2 ? "#169FC6" : "#6D737A",
                        fontWeight: registerStep >= 2 ? "bold" : "normal"
                    }}>
                        تأكيد الحساب
                    </span>
                </div>
            </div>

            {registerStep === 1 ? (
                <form onSubmit={handleRegisterStep1Submit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {/* الصف الأول: اسم المستخدم والهاتف */}
                    <div style={{ display: "flex", gap: "20px" }}>
                        <Input
                            name="username"
                            label="اسم المستخدم"
                            placeholder="ادخل اسم المستخدم"
                                            width="80%"
                margin="auto"
                            padding="20px"
                            border="1px solid #169FC6"
                            required
                        />
                        <Input
                            name="phone"
                            label="الهاتف"
                            placeholder="ادخل رقم الهاتف"
                                            width="80%"
               margin="auto"
                            padding="20px"
                            border="1px solid #169FC6"
                            required
                        />
                    </div>

                    {/* الصف الثاني: الصف الدراسي والعمر */}
                    <div style={{ display: "flex", gap: "20px" }}>
                        <Input
                            name="grade"
                            label="الصف الدراسي"
                            placeholder="الصف"
                                            width="80%"
                margin="auto"
                            padding="20px"
                            border="1px solid #169FC6"
                            required
                        />
                        <Input
                            name="age"
                            label="العمر"
                            placeholder="ادخل عمرك"
                                            width="100%"
                margin="auto"
                            padding="20px"
                            border="1px solid #169FC6"
                            required
                        />
                    </div>

                    {/* البريد الإلكتروني */}
                    <Input
                        name="email"
                        type="email"
                        label="البريد الإلكتروني"
                        placeholder="ادخل البريد الالكتروني"
                                        width="100%"
                margin="auto"
                        padding="20px"
                        border="1px solid #169FC6"
                        required
                    />

                    {/* كلمة المرور */}
                    <Input
                        name="password"
                        label="كلمة المرور"
                        type="password"
                        placeholder="ادخل كلمة المرور"
                                        width="100%"
                margin="auto"
                        padding="20px"
                        border="1px solid #169FC6"
                        required
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                        title="كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، حرف كبير، حرف صغير، رقم، ورمز خاص"
                        showPasswordToggle={true}
                    />

                    {/* تأكيد كلمة المرور */}
                    <Input
                        name="confirmPassword"
                        label="تأكيد كلمة المرور"
                        type="password"
                        placeholder="ادخل كلمة المرور"
                                        width="100%"
                margin="auto"
                        padding="20px"
                        border="1px solid #169FC6"
                        required
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                        title="كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، حرف كبير، حرف صغير، رقم، ورمز خاص"
                        showPasswordToggle={true}
                    />

                    <General_Button
                        text="التالي"
                        bgColor="#169FC6"
                        color="white"
                        width="80%"
                        padding="15px"
                        margin="10px auto"
                    />
                </form>
            ) : (
                <form onSubmit={handleRegisterStep2Submit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <Paragraph style={{fontSize: "25px", color: "black", fontWeight: "bold", textAlign: "center"}}>
                        تأكيد الحساب
                    </Paragraph>
                    <Paragraph style={{fontSize: "14px", color: "#6D737A", textAlign: "center", marginBottom: "20px"}}>
                        نحن نكتشف تلقائيًا الرسائل النصية القصيرة المرسلة إلى رقمك
                    </Paragraph>
                    
                    {/* حقل OTP */}
                    <div style={{ display: "flex", justifyContent: "center", gap: "10px", direction: "ltr" }}>
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                name={`otp-${index}`}
                                id={`otp-${index}`}
                                type="text"
                                value={digit}
                                onChange={(e) => handleOtpChange(e.target.value, index)}
                                onKeyDown={(e) => handleOtpKeyDown(e, index)}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    textAlign: "center",
                                    fontSize: "24px",
                                    border: "1px solid #169FC6",
                                    borderRadius: "8px",
                                    color: "black"
                                }}
                                maxLength={1}
                            />
                        ))}
                    </div>

                    <General_Button
                        text="تحقق من الرمز"
                        bgColor="#169FC6"
                        color="white"
                        width="80%"
                        padding="15px"
                        margin="10px auto"
                    />

                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <Paragraph style={{ fontSize: "14px", color: "#169FC6", cursor: "pointer" }}>
                            <span 
                                style={{ color: "#169FC6", cursor: "pointer" }}
                                onClick={handleResendOtp}
                            >
                                إعادة إرسال الرمز
                            </span>
                        </Paragraph>
                    </div>
                </form>
            )}

            <div style={{ textAlign: "center"}}>
                <Paragraph style={{ fontSize: "14px", color: "#6D737A" }}>
                    لديك حساب بالفعل؟{" "}
                    <span 
                        style={{ color: "#169FC6", cursor: "pointer" }}
                        onClick={() => changeFormType('login')}
                    >
                        تسجيل دخول
                    </span>
                </Paragraph>
            </div>
        </div>
    );

    return(
        <div className='w-full' style={{height: "80vh"}}>
            <ContainerRow>
                <div style={{width: "60%", height: "80vh"}}>
                    <div style={{ height: "100%", padding: "30px"}}>
                        <Paragraph style={{fontSize: "30px", color: "black", fontWeight: "bold", textAlign: "right", marginRight: "50px"}}>
                            أهلا بيك في الماهر
                        </Paragraph>
                        <div style={{marginTop: "50px"}}>
                            {formType === 'login' && <LoginForm />}
                            {formType === 'forgot' && <ForgotPasswordForm />}
                            {formType === 'otp' && <OTPForm />}
                            {formType === 'newPassword' && <NewPasswordForm />}
                            {formType === 'register' && <RegisterForm />}
                        </div>
                    </div>
                </div>
                <div style={{
                    width: "40%", 
                    height: "90vh",
                    backgroundColor: "#169FC6",
                    position: "relative"
                }}>
                    <div style={{position: "absolute", right: "-200px", top:"5%"}}>
                        <Image src="/vectors/onlineL.png" alt="logo" width={720} height={720} />
                    </div>
                </div>
            </ContainerRow>
        </div>
    )
}