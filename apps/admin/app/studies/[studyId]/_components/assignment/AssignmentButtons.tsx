"use client";
import { Flex } from "@styled-system/jsx";
import { studyApi } from "apis/study/studyApi";
import { routerPath } from "constants/router/routerPath";
import { tags } from "constants/tags";
import Link from "next/link";
import type { StudyAssignmentStatusType } from "types/entities/study";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";

const AssignmentButtons = ({
  studyDetailId,
  assignmentStatus,
}: {
  studyDetailId: number;
  assignmentStatus: StudyAssignmentStatusType;
}) => {
  const handleCancelAssignment = async () => {
    const { success } = await studyApi.cancelAssignment(studyDetailId);
    if (success) {
      console.log("휴강 처리에 성공했어요.");
      revalidateTagByName(tags.assignments);
      revalidateTagByName(`${tags.assignments} ${studyDetailId}`);
    } else {
      console.log("휴강 처리에 실패했어요.");
    }
  };

  if (assignmentStatus === "OPEN") {
    return (
      <Button
        asProp={Link}
        href={routerPath["assignment-detail"].href(studyDetailId)}
        size="sm"
        variant="outline"
      >
        과제 내용보기
      </Button>
    );
  }

  if (assignmentStatus === "CANCELED") {
    return (
      <Flex gap="sm">
        <Button size="sm" style={{ pointerEvents: "none" }} variant="sub">
          과제 휴강완료
        </Button>
        <Button disabled size="sm" variant="solid">
          과제 개설하기
        </Button>
      </Flex>
    );
  }

  return (
    <Flex gap="sm">
      <Button size="sm" variant="sub" onClick={handleCancelAssignment}>
        과제 휴강처리
      </Button>
      <Button
        asProp={Link}
        href={routerPath["assignment-edit"].href(studyDetailId)}
        size="sm"
        variant="solid"
      >
        과제 개설하기
      </Button>
    </Flex>
  );
};

export default AssignmentButtons;
