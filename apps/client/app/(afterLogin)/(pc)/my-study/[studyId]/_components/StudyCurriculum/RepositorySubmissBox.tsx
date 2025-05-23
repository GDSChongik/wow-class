"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { studyHistoryApi } from "apis/studyHistoryApi";
import { tags } from "constants/tags";
import type { CSSProperties } from "react";
import { useCallback, useState } from "react";
import type { RepositorySubmissionStatusType } from "types/entities/myAssignment";
import { isGithubRepositoryUrl } from "utils/isGithubRepositoryUrl";
import { revalidateTagByName } from "utils/revalidateTagByName";
import { Edit } from "wowds-icons";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import TextField from "wowds-ui/TextField";

interface RepositorySubmissionBoxProps {
  studyId: number;
  repositoryLink: string;
}

const repositoryInfoMessage = "레포지토리는 한번 입력 후에도 수정 가능해요.";

export const RepositorySubmissionBox = ({
  studyId,
  repositoryLink: initialRepositoryUrl,
}: RepositorySubmissionBoxProps) => {
  const [repositoryUrl, setRepositoryUrl] = useState(initialRepositoryUrl);
  const [repositorySubmissionStatus, setRepositorySubmissionStatus] =
    useState<RepositorySubmissionStatusType>(
      initialRepositoryUrl ? "SUBMITTED" : "EDITING"
    );
  const [errorState, setErrorState] = useState<{
    isError: boolean;
    errorMessage: string;
  }>({
    isError: false,
    errorMessage: "",
  });

  const handleClickEditButton = useCallback(() => {
    setErrorState({
      isError: false,
      errorMessage: "",
    });
    setRepositorySubmissionStatus("EDITING");
  }, []);

  const handleChange = useCallback(
    (value: string) => {
      setRepositoryUrl(value);
    },
    [setRepositoryUrl]
  );

  const handleSuccessRepositorySubmit = useCallback(async () => {
    const { success } = await studyHistoryApi.putRepository(
      studyId,
      repositoryUrl as string
    );
    if (success) {
      revalidateTagByName(tags.studyDetailDashboard);
      setRepositorySubmissionStatus("SUBMITTED");
    }
  }, [studyId, repositoryUrl]);

  const handleClickSubmitButton = useCallback(async () => {
    if (!repositoryUrl) {
      setErrorState({
        isError: true,
        errorMessage: "빈 URL은 입력할 수 없어요.",
      });
    } else if (!isGithubRepositoryUrl(repositoryUrl)) {
      setErrorState({
        isError: true,
        errorMessage: "GitHub 레포지토리 URL을 입력해야 해요.",
      });
    } else {
      setErrorState({
        isError: false,
        errorMessage: "",
      });
      handleSuccessRepositorySubmit();
    }
  }, [handleSuccessRepositorySubmit, repositoryUrl]);

  return (
    <Flex gap="50px">
      <Text as="span" style={textStyle} typo="body1">
        레포지토리
      </Text>
      <div style={{ width: "100%" }}>
        <Box
          style={boxStyle}
          variant="text"
          text={
            <Flex direction="column" width="100%">
              <Flex alignItems="center" justifyContent="space-between">
                <Flex flexDirection="column" gap="xs">
                  <Text as="h3" typo="h3">
                    과제 제출을 위한 레포지토리 URL 입력
                  </Text>
                  {repositorySubmissionStatus === "SUBMITTED" && (
                    <>
                      <Text color="sub">{repositoryInfoMessage}</Text>
                    </>
                  )}
                  {repositorySubmissionStatus === "EDITING" && (
                    <div>
                      <Text color="error" typo="body2">
                        * 입력하지 않으면 앞으로의 과제를 제출할 수 없어요.
                      </Text>
                      <Text color="sub" typo="body2">
                        * 레포지토리가 Private 상태면 입력할 수 없어요.
                      </Text>
                    </div>
                  )}
                </Flex>
                <Space height={4} />

                <>
                  {repositorySubmissionStatus === "SUBMITTED" && (
                    <>
                      <Flex className={urlBoxStyle}>
                        <div className={overflowTextStyle}>{repositoryUrl}</div>
                        <Flex gap="xs" marginLeft="auto">
                          <Edit
                            height={24}
                            stroke="textBlack"
                            style={iconStyle}
                            width={24}
                            onClick={handleClickEditButton}
                          />
                        </Flex>
                      </Flex>
                    </>
                  )}
                  {repositorySubmissionStatus === "EDITING" && (
                    <Flex gap="xs" height={42}>
                      <TextField
                        error={errorState.isError}
                        {...(errorState.isError && {
                          helperText: <li>{errorState.errorMessage}</li>,
                        })}
                        label=""
                        placeholder="URL 을 입력하세요"
                        style={textFieldStyle}
                        value={repositoryUrl}
                        onChange={handleChange}
                      />

                      <Button
                        aria-label="레포지토리 URL 입력"
                        disabled={!repositoryUrl}
                        onClick={handleClickSubmitButton}
                      >
                        입력
                      </Button>
                    </Flex>
                  )}
                </>
              </Flex>
            </Flex>
          }
        />
      </div>
    </Flex>
  );
};
const textStyle: CSSProperties = {
  whiteSpace: "nowrap",
};

const overflowTextStyle = css({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
const urlBoxStyle = css({
  backgroundColor: "backgroundAlternative",
  borderRadius: "5px",
  color: "sub",
  justifyContent: "space-between",
  paddingX: "24px",
  paddingY: "18px",
  textStyle: "h2",
  width: "436px",
});

const boxStyle: CSSProperties = {
  width: "100%",
  height: "fit-content",
  minWidth: "100%",
};

const iconStyle: CSSProperties = {
  cursor: "pointer",
};

const textFieldStyle: CSSProperties = {
  gap: "0px",
  height: "58px !important",
};
