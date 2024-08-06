import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

export default function Dropdown() {
  return (
    <div className="w-auto text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-white py-1.5 px-3 text-black font-rexbold text-xl shadow-inner shadow-white/10 focus:outline-none data-[hover]:text-blue-500 data-[focus]:outline-1 data-[focus]:outline-white text-center justify-center group relative w-full h-full mr-10 flex-wrap data-[open]:text-blue-500 group1">
          კლუბები
          <ChevronDownIcon className="size-4 fill-black/60 group-hover:fill-blue-500 group-data-[open]:rotate-180 transition-all duration-200 group-data-[open]:fill-blue-500" />
          <div className="h-[3px] w-0 absolute transition-all duration-300 bottom-0 left-3 right-0 group-hover:w-4/5 rounded-lg bg-blue-500 line"></div>
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-64 mt-6 z-50 rounded-xl border border-white/90 bg-white/100 p-1 text-sm/6 text-black all [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-y-0 data-[open]:opacity-90 origin-top h-[220px] data-[open]:scale-y-100 transition-all ease-linear duration-200 !block"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-3 px-3 data-[focus]:bg-white/90">
              <PencilIcon className="size-4 fill-black/30" />
              Edit
              <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-[focus]:inline">
                ⌘E
              </kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-3 px-3 data-[focus]:bg-white/90">
              <Square2StackIcon className="size-4 fill-black/30" />
              Duplicate
              <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-[focus]:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-3 px-3 data-[focus]:bg-white/90">
              <ArchiveBoxXMarkIcon className="size-4 fill-black/30" />
              Archive
              <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-[focus]:inline">
                ⌘A
              </kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-3 px-3 data-[focus]:bg-white/90">
              <TrashIcon className="size-4 fill-black/30" />
              Delete
              <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-[focus]:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
