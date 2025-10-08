import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

interface disclosure {
  title: string;
  content: ReactNode;
}

const ExpandableSections = ({ items }: { items: disclosure[] }) => {
  return (
    <div className="w-full px-4 pt-32 transition duration-200 ease-out divide-y divide-text/25">
      {items.map((item) => (
        <Disclosure
          as="div"
          className="p-6 transition duration-200 ease-out"
          defaultOpen={false}
        >
          <DisclosureButton className="group flex w-full justify-between gap-3">
            <span className="text-sm/6 font-medium text-title text-left">
              {item.title}
            </span>
            <ChevronDown className="lg:size-5 size-10 transition duration-200 ease-out group-data-open:rotate-180 text-text" />
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="origin-top text-text transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0"
          >
            {item.content}
          </DisclosurePanel>
        </Disclosure>
      ))}
    </div>
  );
};

export default ExpandableSections;
