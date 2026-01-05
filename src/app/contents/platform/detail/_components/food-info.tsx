import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { Select } from "@/components/FormElements/select";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { Button } from "@/components/ui-elements/button";
import { ModalTrigger } from "./modalTrigger";

export function FoodInfo() {
  return (
    <ShowcaseSection title="메인 배너" className="!p-6.5">
      <form action="#"></form>
      <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
        <InputGroup
          type="file"
          fileStyleVariant="style1"
          label="베너 이미지 선택"
          placeholder="Attach file"
          className="mb-4.5"
          required
        />

        <InputGroup
          label="배너명"
          type="text"
          placeholder=""
          className="w-full xl:w-1/2"
          required
        />

        <InputGroup
          label="이동경로"
          type="text"
          placeholder=""
          className="w-full xl:w-1/2"
          required
        />

        <div className="gird">
          <label className="text-body-sm font-medium text-dark">
            노출기간
            <span className="ml-1 select-none text-red">*</span>
          </label>

          <div className="mt-3 flex items-baseline">
            <InputGroup
              type="date"
              label=""
              placeholder="Attach file"
              className="mb-4.5"
              required
            />
            <label className="mx-3">~</label>

            <InputGroup
              type="date"
              label=""
              placeholder="Attach file"
              className="mb-4.5"
              required
            />
          </div>
        </div>

        <Select
          label="노출상태"
          placeholder=""
          className="mb-4.5"
          items={[
            { label: "노출", value: "open" },
            { label: "비노출", value: "close" },
          ]}
        />
      </div>
    </ShowcaseSection>
  );
}
