"use client";
import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";

import StudyDatePick from "./StudyDatePick";
import StudyTextInfo from "./StudyTextInfo";
import StudyTimePick from "./StudyTimePick";

const StudyInfoBox = ({
  lessonPeriod,
  index,
}: {
  week: number;
  assignmentPeriod: {
    startDate: string;
    endDate: string;
  };
  lessonPeriod: {
    startDate: string;
    endDate: string;
  };
  index: number;
}) => {
  // const { setValue } = useFormContext();
  // useEffect(() => {
  //   setValue(`studySession.${index}.lesson`, index + 1);
  // }, []);
  return (
    <section aria-label="create-detailInfo-box" className={StudyInfoBoxStyle}>
      <div className={StudyInfoBoxWeekStyle}>수업정보</div>
      <Flex flexDirection="column" maxHeight={41} width="100%">
        <StudyDatePick index={index} lessonPeriod={lessonPeriod} />
        <StudyTimePick index={index} />
        <StudyTextInfo index={index} />
      </Flex>
    </section>
  );
};

export default StudyInfoBox;

const StudyInfoBoxStyle = css({
  width: "100%",
  position: "relative",
  borderRadius: "md",
  border: "1px solid",
  borderColor: "outline",
  height: "297px",
  fontStyle: "body1",
});

const StudyInfoBoxWeekStyle = css({
  width: "100%",
  borderBottom: "1px solid",
  borderColor: "sub",
  height: "42px",
  display: "flex",
  alignItems: "center",
  padding: "xs",
});
