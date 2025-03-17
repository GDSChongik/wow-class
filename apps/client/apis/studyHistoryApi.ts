import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type {
  AssignmentHistoryDto,
  CompletedStudyDto,
  MyAppliedStudyListApiResponseDto,
} from "types/dtos/studyHistory";

export const studyHistoryApi = {
  getStudyHistory: async (studyId: number) => {
    const response = await fetcher.get<AssignmentHistoryDto[]>(
      `${apiPath.studyHistory}/assignments?studyId=${studyId}`,
      {
        next: { tags: [tags.studyHistory] },
        cache: "no-store",
      }
    );

    return response.data;
  },
  putRepository: async (studyId: number, repositoryLink: string) => {
    const response = await fetcher.put(
      `${apiPath.studyHistory}/repositories/me`,
      { studyId, repositoryLink }
    );

    return { success: response.ok };
  },

  submitAssignment: async (studyDetailId: number) => {
    const response = await fetcher.post(
      `${apiPath.studyHistory}/submit?studyDetailId=${studyDetailId}`,
      null
    );

    return { success: response.ok };
  },
  getMyCompletedStudy: async () => {
    const response = await fetcher.get<CompletedStudyDto[]>(
      `${apiPath.studyHistory}/me/complete`,
      {
        next: { tags: [tags.studyHistory] },
        cache: "force-cache",
      }
    );

    return response.data;
  },
  getMyAppliedStudyList: async () => {
    const response = await fetcher.get<MyAppliedStudyListApiResponseDto[]>(
      apiPath.myAppliedStudy,
      {
        next: { tags: [tags.myAppliedStudyList] },
        cache: "force-cache",
      }
    );

    return response.data;
  },
};
