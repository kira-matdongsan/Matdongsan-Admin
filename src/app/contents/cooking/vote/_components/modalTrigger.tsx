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
};

export function ModalTrigger({ open, setOpen }: ModalTriggerProps) {
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
          회원 상세
        </h2>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="mb-5 overflow-x-auto">
            <Table className="[&_td]:border-b [&_th]:border-b">
              <TableBody>
                <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                  <TableHead className="max-w-[150px]">제철요리</TableHead>
                  <TableCell>콘치즈</TableCell>
                  <TableHead className="min-w-[150px]">음식명</TableHead>
                  <TableCell>옥수수</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                  <TableHead className="max-w-[15px]">이미지</TableHead>
                  <TableCell>
                    <div className="flex justify-center">
                      <Image
                        className="dark:hidden"
                        src="https://constant-tan-rl1hhmbzlu-rrgllzf9kf.edgeone.dev/Rectangle%20154853%20(1).png"
                        alt="옥수수"
                        width={100}
                        height={100}
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                      <Image
                        className="dark:hidden"
                        src="https://constant-tan-rl1hhmbzlu-rrgllzf9kf.edgeone.dev/Rectangle%20154853%20(1).png"
                        alt="옥수수"
                        width={100}
                        height={100}
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center">
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
                  <TableCell></TableCell>
                  <TableCell className="text-left">3</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow className="text-center text-base font-medium text-dark dark:text-white">
                  <TableHead className="max-w-[150px]">등록자</TableHead>
                  <TableCell>ynsong@naver.com</TableCell>
                  <TableHead className="min-w-[150px]">등록일시</TableHead>
                  <TableCell>2025-08-08 13:44:44</TableCell>
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
