import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import type { NextPage } from "next";
import { Layout } from "src/layout";

import { useTheme } from "@/context/theme";

const SettingTheme: NextPage = () => {
  const { themes, isMounted, currentTheme, handleTheme } = useTheme();
  if (!isMounted) return null;

  return (
    <Layout left="back" center="テーマ">
      <RadioGroup value={currentTheme} onChange={handleTheme}>
        <RadioGroup.Label className="sr-only">Color theme</RadioGroup.Label>
        {themes.map((theme) => {
          return (
            <RadioGroup.Option
              key={theme.id}
              value={theme.id}
              className={({ active, checked }) => {
                return clsx(
                  "-mx-4 cursor-pointer hover:bg-zinc-100 focus:outline-none dark:hover:bg-zinc-700",
                  {
                    "bg-zinc-100 dark:bg-zinc-700": checked || active,
                  }
                );
              }}
            >
              {({ checked }) => {
                return (
                  <div className="flex items-center justify-between py-3 px-4 text-lg">
                    <RadioGroup.Label className="font-bold">{theme.label}</RadioGroup.Label>
                    {checked ? <CheckIcon className="h-6 w-6 text-blue-500" /> : null}
                  </div>
                );
              }}
            </RadioGroup.Option>
          );
        })}
      </RadioGroup>
    </Layout>
  );
};

export default SettingTheme;
