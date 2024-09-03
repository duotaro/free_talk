import Link from "next/link";
import { useState } from "react";

export default function SwitchLang({currentLocale}) {
    const [selectedKeys, setSelectedKeys] = useState(currentLocale);

    const selectedValue = currentLocale == "ja" ? "日本語" : "English"


    return (
        <>
        {/* <Dropdown>
            <DropdownTrigger>
            <Button variant="bordered" >
                {selectedValue}
            </Button>
            </DropdownTrigger>
            <DropdownMenu 
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <DropdownItem key="ja"><Link href="/" locale="ja" passHref>日本語</Link></DropdownItem>
                <DropdownItem key="en"><Link href="/" locale="en" passHref>English</Link></DropdownItem>
            </DropdownMenu>
        </Dropdown> */}
        </>
    );
}