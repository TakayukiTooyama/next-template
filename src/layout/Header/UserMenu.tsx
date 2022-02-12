import { Popover, Transition } from "@headlessui/react";
import { CogIcon, LogoutIcon } from "@heroicons/react/outline";
import Link from "next/link";
import type { VFC } from "react";
import { Fragment } from "react";

export const UserMenu: VFC = () => {
  return (
    <Popover className="grid">
      {({ open }) => {
        return (
          <>
            <Popover.Button className="flex rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"></Popover.Button>

            <div className="relative">
              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <Popover.Panel
                  static
                  className="absolute left-full z-10 mt-2 w-screen max-w-xs -translate-x-full pl-8 sm:max-w-sm sm:px-0 xl:-left-full xl:-translate-x-1/2 2xl:left-1/2"
                >
                  <div className="overflow-hidden rounded-2xl bg-white py-4 shadow-lg ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700">
                    <div>
                      <Link href="/setting/qin">
                        <a className="flex items-center p-4 hover:bg-zinc-100 focus:outline-none focus-visible:bg-zinc-100 dark:hover:bg-zinc-700 dark:focus-visible:bg-zinc-700">
                          <div className="ml-4"></div>
                        </a>
                      </Link>
                    </div>
                    <div className="relative grid">
                      <Link href="/setting/memo">
                        <a className="flex items-center py-2.5 px-4 hover:bg-zinc-100 focus:outline-none focus-visible:bg-zinc-100 dark:hover:bg-zinc-700 dark:focus-visible:bg-zinc-700">
                          <div className="flex shrink-0 items-center justify-center">
                            <CogIcon className="h-7 w-7" />
                          </div>
                          <p className="ml-4 font-bold">設定</p>
                        </a>
                      </Link>
                      <button
                        type="button"
                        className="flex items-center py-2.5 px-4 hover:bg-zinc-100 focus:outline-none focus-visible:bg-zinc-100 dark:hover:bg-zinc-700 dark:focus-visible:bg-zinc-700"
                      >
                        <div className="flex shrink-0 items-center justify-center">
                          <LogoutIcon className="ml-0.5 h-7 w-7 text-red-500" />
                        </div>
                        <p className="ml-4 font-bold text-red-500">ログアウト</p>
                      </button>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </div>
          </>
        );
      }}
    </Popover>
  );
};
