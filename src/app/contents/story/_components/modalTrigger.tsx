"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getFoodList } from "@/components/Tables/fetch";
import Modal from "@/components/Modal/Modal";
import Image from "next/image";
import { RadioInput } from "@/components/FormElements/radio";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui-elements/button";
import InputGroup from "@/components/FormElements/InputGroup";
import { Select } from "@/components/FormElements/select";

type ModalTriggerProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
};

export function ModalTrigger({ open, setOpen, type }: ModalTriggerProps) {
  const [search, setSearch] = useState("");

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["foods"],
    queryFn: getFoodList,
    enabled: open,
  });

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 className="my-5 text-body-2xlg font-bold text-dark dark:text-white">
          이야기 상세
        </h2>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="mb-5 overflow-x-auto">
            <Table className="[&_td]:border-b [&_th]:border-b">
              <TableBody>
                <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                  <TableHead className="max-w-[150px]">구분</TableHead>
                  <TableCell>레시피</TableCell>
                  <TableHead className="min-w-[150px]">콘치즈</TableHead>
                  <TableCell>옥수수</TableCell>
                </TableRow>
              </TableBody>

              {type == "레시피" && (
                <>
                  <TableBody>
                    <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                      <TableHead className="min-w-[100px]">재료</TableHead>
                      <TableCell colSpan={3} className="text-left">
                        옥수수, 소금 2T, 뉴슈가 1T
                      </TableCell>
                    </TableRow>
                  </TableBody>

                  <TableBody>
                    <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                      <TableHead className="max-w-[150px]">조리방법</TableHead>
                      <TableCell colSpan={3} className="text-left">
                        1. 옥수수 껍질을 두 세장 남겨두고 나머지는 다
                        손질해줍니다. 옥수수 껍질이 조금 남아있어야 맛있어요!{" "}
                        <br />
                        2. 옥수수가 잠길정도로 물을 부어주고, 소금과 뉴슈가를
                        2:1 비율로 넣어주세요. 뉴슈가가 없으면 설탕을 소금보다
                        조금 더 많이 넣어주세요.
                        <br /> 3.센불로 20분정도 끓인 후 중불에서 20분 끓여서
                        먹으면 됩니다.
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </>
              )}

              {type == "플레이스" && (
                <>
                  <TableBody>
                    <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                      <TableHead className="min-w-[100px]">장소</TableHead>
                      <TableCell colSpan={3} className="text-left">
                        토오베(차 전문점) 서울특별시 종로구 관훈동 118-36 3층
                      </TableCell>
                    </TableRow>
                  </TableBody>

                  <TableBody>
                    <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                      <TableHead className="max-w-[150px]">한줄평</TableHead>
                      <TableCell colSpan={3} className="text-left">
                        여름시즌에만 한정 판매하는 옥수수 빙수를 꼭 먹어보세요
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </>
              )}

              {type == "제철기록" && (
                <>
                  <TableBody>
                    <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                      <TableHead className="min-w-[100px]">기록일자</TableHead>
                      <TableCell colSpan={3} className="text-left">
                        2024.10.28
                      </TableCell>
                    </TableRow>
                  </TableBody>

                  <TableBody>
                    <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                      <TableHead className="max-w-[150px]">기록일기</TableHead>
                      <TableCell colSpan={3} className="text-left">
                        길가에 트럭을 보면 그냥 지나치지 못하고 항상 옥수수를
                        사먹는데 이태원 길가에 있던 옥수수 사장님이 오늘 개시
                        손님이라고 해서 뭔가 기분이 좋았당! 집에 가서 먹으려고
                        했는데 못참고 길옥수수를 했다.
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </>
              )}

              <TableBody>
                <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                  <TableHead className="max-w-[15px]">이미지</TableHead>
                  <TableCell colSpan={3}>
                    <div className="flex justify-center">
                      <Image
                        className="dark:hidden"
                        src="https://constant-tan-rl1hhmbzlu-rrgllzf9kf.edgeone.dev/Rectangle%20154853%20(1).png"
                        alt="옥수수"
                        width={100}
                        height={100}
                      />

                      <Image
                        className="dark:hidden"
                        src="https://constant-tan-rl1hhmbzlu-rrgllzf9kf.edgeone.dev/Rectangle%20154853%20(1).png"
                        alt="옥수수"
                        width={100}
                        height={100}
                      />

                      <Image
                        className="dark:hidden"
                        src="https://constant-tan-rl1hhmbzlu-rrgllzf9kf.edgeone.dev/Rectangle%20154853%20(1).png"
                        alt="옥수수"
                        width={100}
                        height={100}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                  <TableHead className="max-w-[150px]">승인상태</TableHead>
                  <TableCell>
                    <Select
                      label=""
                      placeholder="선택"
                      className="mr-5 min-w-[150px] !space-y-0"
                      items={[
                        { label: "승인대기", value: "open" },
                        { label: "승인", value: "close" },
                        { label: "승인취소", value: "cancel" },
                      ]}
                    />
                  </TableCell>
                  <TableHead className="min-w-[150px]">
                    승인자(변경일시)
                  </TableHead>
                  <TableCell>승인대기(-)</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                  <TableHead className="max-w-[150px]">신고이력</TableHead>

                  <TableCell colSpan={3}>3</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                  <TableHead className="max-w-[150px]">등록자</TableHead>
                  <TableCell>ynsong@naver.com</TableCell>
                  <TableHead className="min-w-[150px]">등록일시</TableHead>
                  <TableCell className="text-left">
                    2025-08-08 13:44:44
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}

        <div className="flex justify-center">
          <Button
            label="확인"
            variant="outlinePrimary"
            size="small"
            shape="rounded"
            onClick={() => setOpen(false)}
          />
        </div>
      </Modal>
    </>
  );
}
