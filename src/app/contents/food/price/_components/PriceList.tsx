"use client";
import { Checkbox } from "@/components/FormElements/checkbox";
import { getApiList, getPriceList } from "@/components/Tables/fetch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

import { useQuery } from "@tanstack/react-query";

export function PriceList({ className }: { className?: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["foods", ""], // search 없으면 undefined
    queryFn: getPriceList,
  });

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div
      className={cn(
        "grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <h2 className="mb-8 text-body-2xlg font-bold text-dark dark:text-white">
        Foods List
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="min-w-[15px]">
              <Checkbox withIcon="check" label={""} />
            </TableHead>
            <TableHead className="min-w-[20px]">번호</TableHead>
            <TableHead className="min-w-[100px]">음식명</TableHead>
            <TableHead className="min-w-[170px]">어디에서</TableHead>
            <TableHead className="min-w-[100px]">얼마에</TableHead>
            <TableHead className="min-w-[50px]">몇개/g</TableHead>
            <TableHead className="min-w-[50px]">노출</TableHead>
            <TableHead className="min-w-[80px]">등록자</TableHead>
            <TableHead>등록일시</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((food, i) => (
            <TableRow
              className="text-base font-medium text-dark dark:text-white [&>td]:text-center"
              key={food.name + i}
            >
              {/* <TableCell className="flex min-w-fit items-center gap-3">
                <Image
                  src={channel.logo}
                  className="size-8 rounded-full object-cover"
                  width={40}
                  height={40}
                  alt={channel.name + " Logo"}
                  role="presentation"
                />
                <div className="">{food.name}</div>
              </TableCell>

              <TableCell>{compactFormat(food.seasonMonths)}</TableCell>

              <TableCell className="!text-right text-green-light-1">
                ${standardFormat(food.name)}
              </TableCell> */}
              <TableCell>
                <Checkbox label="" withIcon="check" />
              </TableCell>
              <TableCell>{food.seq}</TableCell>
              <TableCell>{food.name}</TableCell>
              <TableCell>{food.where}</TableCell>
              <TableCell>{food.price}</TableCell>
              <TableCell>{food.count}</TableCell>
              <TableCell>{food.openStatus}</TableCell>
              <TableCell>{food.userID}</TableCell>
              <TableCell>{food.regDT}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
