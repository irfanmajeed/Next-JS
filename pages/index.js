import React from "react";
import { useState } from "react";

import { Card, Radio, Modal, InputNumber, Space, Button } from "antd";

const Home = () => {
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBMI] = useState();
  const [healthCondition, setHealthCondition] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);

  function genderHandler(e) {
    // console.log(`checked = ${e.target.value}`);
    console.log(e.target.value);
    // setValue(e.target.value);
    // message.info(`You have selected: ${e.target.value}`);
    // setIsModalVisible(true);
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const ageHandler = (value) => {
    // console.log(value);
    setAge(value);
  };
  const weightHandler = (value) => {
    // console.log(value);
    setWeight(value);
  };
  const heightHandler = (value) => {
    // console.log(`Height is  ${value}`);
    setHeight(value);
  };

  const calculateBMI = () => {
    const weightCal = weight;
    // console.log(`Weight is = ${weightCal}`);
    const heightMeter = height * 0.01;
    // console.log(`Height in Meter is = ${heightMeter}`);
    const heightSqr = Math.pow(heightMeter, 2).toFixed(2);
    // const heightPower = Math.round(heightSqr);
    // console.log(`Height with power 2 is = ${heightSqr}`);
    const bmiCal = weightCal / heightSqr;
    // console.log(`BNI is = ${bmiCal}`);
    setBMI(bmiCal.toFixed(2));
    if (bmiCal <= 18.5) {
      setHealthCondition("Under Weight");
    }
    if (bmiCal >= 18.5 && bmiCal <= 24.9) {
      setHealthCondition("Normal Weight");
    }
    if (bmiCal >= 25 && bmiCal <= 29.9) {
      setHealthCondition("Over Weight");
    }
    if (bmiCal >= 30) {
      setHealthCondition("Obesity");
    }
    setIsModalVisible(true);
  };

  return (
    <>
      <div className="site-card-border-less-wrapper">
        <Card title="BMI Calculator">
          <div className="card-content">
            <Space direction="vertical" size={"large"}>
              <Radio.Group onChange={genderHandler}>
                <Radio
                  // checked={isMaleChecked}
                  // onChange={onMaleChange}
                  value={"Male"}
                >
                  Male
                </Radio>
                <Radio
                  // checked={isFemaleChecked}
                  // onChange={onFemaleChange}
                  value={"Female"}
                >
                  Female
                </Radio>
              </Radio.Group>

              <InputNumber
                addonBefore="Age"
                addonAfter="2 - 150"
                value={age}
                min={2}
                max={150}
                defaultValue={65}
                onChange={ageHandler}
              />

              <InputNumber
                addonBefore="Weight"
                addonAfter="kg"
                value={weight}
                onChange={weightHandler}
              />

              <InputNumber
                addonBefore="Height"
                addonAfter="cm"
                value={height}
                onChange={heightHandler}
              />

              <Button type="primary" onClick={calculateBMI}>
                Calculate BMI
              </Button>
            </Space>
            {/* <DatePicker format={"DD/MM/YYYY"} onChange={dateP} /> */}
          </div>
        </Card>
      </div>
      <Modal
        title="BMI Result"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p className="bmi-result">
          Your BMI is <strong>{bmi}</strong>. You are{" "}
          <strong>{healthCondition}.</strong>
        </p>
        {/* <strong></strong> */}
      </Modal>
    </>
  );
};

export default Home;
