import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Slider } from "@miblanchard/react-native-slider";
import { BlurView } from "@react-native-community/blur";
import { useState } from "react";
import { useRef } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { commonStyles } from "../../../assets/commons/common-styles";
import SliderThumbSvg from "../../../assets/learn-tab/assessment-flow/slider-thumb.svg";
import { ScreenTexts } from "../../../constants/ScreenTexts";
import { styles } from "./styles";
import SliderBg from "../../../assets/commons/slider-bg.svg";
import { Button } from "../../../common";
import { useDispatch, useSelector } from "react-redux";
import { axiosPOSTCall } from "../../../utils/axios";
import CloseRed from "../../../assets/commons/close-red.svg";
import Icon1 from "../../../assets/commons/slider/not-confident.svg";
import Icon2 from "../../../assets/commons/slider/confused.svg";
import Icon3 from "../../../assets/commons/slider/neutral.svg";
import Icon4 from "../../../assets/commons/slider/confident.svg";
import Icon5 from "../../../assets/learn-tab/assessment-flow/slider-thumb.svg";
import Icon1bg from "../../../assets/commons/slider/no-confidence-bg.svg";
import Icon2bg from "../../../assets/commons/slider/confused-bg.svg";
import Icon3bg from "../../../assets/commons/slider/neutral-bg.svg";
import Icon4bg from "../../../assets/commons/slider/confident-bg.svg";

export const ConfidenceSlider = ({
  snapPoint,
  setSheet,
  data,
  selectedQuestionId,
  tTime,
  getQuestion,
  dragAndDropOptions,
  setPause,
  finalIndexes,
}) => {
  const dWidth = Dimensions.get("screen").width;

  const sheetRef = useRef(null);
  const [sliderChange, setSliderChange] = useState(0);
  const [sliderIcons, setSliderIcons] = useState(2);
  const [loading, setLoading] = useState(false);
  const handleClosePress = () => {
    sheetRef.current?.close();
    setSheet(false);
  };
  const userData = useSelector((state) => state?.loginDetails);
  const challengeDetails = useSelector((state) => state?.challengeDetails);


  const submitQuestion = () => {
    setLoading(true);
    var confidence;
    if (sliderChange == 0) {
      confidence = "low";
    } else if (sliderChange == "0.5") {
      confidence = "medium";
    } else if (sliderChange == "1") {
      confidence = "high";
    }
    var url = "api/app/challenges/attempt-question";
    var token = userData?.token;
    var tenantId = userData?.user?.registrations[0]?.applicationId;
    var obj = {
      masterId: challengeDetails?.challengeResult,
      sessionId: challengeDetails?.session,
      question: data?.questionInfo?._id,
      solutionIndex:
        data?.questionInfo?.questionType == "PUT_IN_ORDER"
          ? finalIndexes
          : selectedQuestionId > -1
          ? [selectedQuestionId]
          : null,
      isTrueOrFalse: null,
      // options:
      //   data?.questionInfo?.questionType == "PUT_IN_ORDER"
      //     ? finalIndexes
      //     : null,
      timeTaken: tTime,
      confidence: confidence,
    };
    setLoading(true);
    axiosPOSTCall(url, obj, tenantId, token, (callBack) => {
      console.log(
        "🚀 ~ file: ConfidenceSlider.js ~ line 65 ~ axiosPOSTCall ~ callBack",
        callBack
      );
      if (callBack.statusCode == 200) {
        getQuestion();
        // SaveStorageItems(
        //   "@loginDetails",
        //   JSON.stringify(callBack.data),
        //   0,
        //   (callBacks) => {
        //     dispatch(loginDetails({ payload: callBack?.data?.loginDetails }));
        //     navigation.replace(RoutesText.names.LANDING);
        //   }
        // );
      }
      setLoading(false);
    });
  };

  return (
    <>
      <BlurView style={styles.absolute} blurAmount={2} />
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => {
          setPause(false);
          setSheet(false);
        }}
      >
        <CloseRed />
      </TouchableOpacity>
      <BottomSheet
        backgroundStyle={{ borderRadius: 20 }}
        snapPoints={[snapPoint ? snapPoint : "60%"]}
        ref={sheetRef}
      >
        <BottomSheetView style={styles.bottomSheet}>
          <Text style={styles.name}>{userData?.user?.fullName?userData.user.fullName:'Tessa'}</Text>
          <Text style={styles.title}>
            {ScreenTexts.ASSESSMENT_FLOW.CONFIDENCE_MONITORING.TITLE}
          </Text>

          <View style={styles.sliderContainer}>
            <Slider
              value={sliderChange}
              onValueChange={(value) => {
                console.log(
                  "🚀 ~ file: ConfidenceSlider.js ~ line 106 ~ value",
                  value[0]
                );
                // console.log(sliderChange[0]);
                setSliderChange(value[0]);
              }}
              step={0.25}
              renderThumbComponent={() => (
                <View style={{ alignItems: "center", marginTop: 20 }}>
                  {sliderChange === 0 ? (
                    <Icon1 />
                  ) : sliderChange === 0.25 ? (
                    <Icon2 />
                  ) : sliderChange === 0.5 ? (
                    <Icon3 />
                  ) : sliderChange === 0.75 ? (
                    <Icon4 />
                  ) : (
                    sliderChange === 1 && <Icon5 />
                  )}

                  {/* <SliderThumbSvg /> */}
                  <Text style={styles.sliderText}>
                    {sliderChange === 0
                      ? ScreenTexts.ASSESSMENT_FLOW.CONFIDENCE_MONITORING
                          .SLIDER_TEXTS.NOT_CONFIDENT
                      : sliderChange === 0.25
                      ? ScreenTexts.ASSESSMENT_FLOW.CONFIDENCE_MONITORING
                          .SLIDER_TEXTS.CONFUSED
                      : sliderChange === 0.5
                      ? ScreenTexts.ASSESSMENT_FLOW.CONFIDENCE_MONITORING
                          .SLIDER_TEXTS.NEUTRAL
                      : sliderChange === 0.75
                      ? ScreenTexts.ASSESSMENT_FLOW.CONFIDENCE_MONITORING
                          .SLIDER_TEXTS.CONFIDENT
                      : sliderChange === 1 &&
                        ScreenTexts.ASSESSMENT_FLOW.CONFIDENCE_MONITORING
                          .SLIDER_TEXTS.VERY_CONFIDENT}
                  </Text>
                </View>
              )}
              // trackStyle={{ width: dWidth * 0.87 }}
              trackStyle={{ width: dWidth * 0.7, marginLeft: 16 }}
              renderTrackMarkComponent={() => {
                if (sliderChange === 0) {
                  return (
                    <Icon1bg width={dWidth * 0.78} style={{ marginLeft: 16 }} />
                    
                  );
                }
                if (sliderChange === 0.25) {
                  return (
                    <Icon2bg width={dWidth * 0.78} style={{ marginLeft: 16 }} />
                  );
                }
                if (sliderChange === 0.5) {
                  return (
                    <Icon3bg width={dWidth * 0.78} style={{ marginLeft: 16 }} />
                  );
                }
                if (sliderChange === 0.75) {
                  return (
                    <Icon4bg width={dWidth * 0.78} style={{ marginLeft: 16 }} />
                  );
                }
                if (sliderChange === 1) {
                  return (
                    <SliderBg
                      width={dWidth * 0.78}
                      style={{ marginLeft: 16 }}
                    />
                  );
                }
              }}
            />
          </View>
          <View style={styles.alignHorizontalApart}>
            {/* <TouchableOpacity
              onPress={() => {
                handleClosePress();
              }}
              style={styles.tryBtn}
            >
              <Text style={styles.tryBtnStyles}>
                {ScreenTexts.ASSESSMENT_FLOW.CONFIDENCE_MONITORING.TRY_BTN}
              </Text>
            </TouchableOpacity> */}
            <Button
              btnText={
                ScreenTexts.ASSESSMENT_FLOW.CONFIDENCE_MONITORING.TRY_BTN
              }
              //   disabled={selectedQuestionId != -1 ? 0 : 1}
              //   setLoading={setLoading}
              style={{ width: "45%", borderColor: "red" }}
              loading={false}
              noGradient={1}
              submitFun={() => {
                handleClosePress();
                setPause(false);
                //   alert(selectedQuestionId);
                // selectedQuestionId != -1 ? setTriggerSheet(true) : null;
              }}
            />
            <Button
              btnText={
                ScreenTexts.ASSESSMENT_FLOW.CONFIDENCE_MONITORING.CONTINUE_BTN
              }
              //   disabled={selectedQuestionId != -1 ? 0 : 1}
              //   setLoading={setLoading}
              style={{ width: "45%" }}
              loading={loading}
              submitFun={() => {
                submitQuestion();
                //   alert(selectedQuestionId);
                // selectedQuestionId != -1 ? setTriggerSheet(true) : null;
              }}
            />
            {/* <TouchableOpacity style={styles.continueBtn}>
              <LinearGradient
                start={{ x: 0, y: 0.75 }}
                end={{ x: 1, y: 0.25 }}
                // style={styles.continueBtn}
                colors={[
                  commonStyles.BUTTON_GRADIENT_1,
                  commonStyles.BUTTON_GRADIENT_2,
                ]}
              >
                <Text style={styles.continueBtnText}>
                  {
                    ScreenTexts.ASSESSMENT_FLOW.CONFIDENCE_MONITORING
                      .CONTINUE_BTN
                  }
                </Text>
              </LinearGradient>
            </TouchableOpacity> */}
          </View>

          <Text style={styles.feedback}>
            {ScreenTexts.ASSESSMENT_FLOW.CONFIDENCE_MONITORING.FEEDBACK}{" "}
            <Text
              onPress={() => {
                // setSheet(false);
                // setTimeout(() => {
                //     navigation.navigate(RoutesText.names.ASSESSMENT_FLOW.SEND_FEEDBACK)
                // }, 200)
              }}
              style={styles.link}
            >
              {ScreenTexts.ASSESSMENT_FLOW.CONFIDENCE_MONITORING.CLICK_HERE}
            </Text>
          </Text>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};
