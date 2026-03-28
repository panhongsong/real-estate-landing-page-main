import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { Button, Dropdown, Space } from "antd";
import Link from "next/link";
import { DownOutlined } from '@ant-design/icons';

import { AiOutlineAlignRight } from "react-icons/ai";

import { toggleValue, selectToggleValue } from "@/utils/toggleSlice";
import { MenuItems } from "@/common/types/menu";

interface MenuItemProps {
  items: MenuItems[];
}

export default function MenuItem({ items }: MenuItemProps) {
  const dispatch = useDispatch();
  const toggleState = useSelector(selectToggleValue);
  const handleToggle = () => {
    dispatch(toggleValue());
  };

  // 处理菜单项点击事件
  const handleMenuClick = (href: string) => {
    // 执行跳转操作，可以使用 window.location 或者其他路由方案
    href && (window.location.href = href);
  };

  // 将 MenuItems 转换为 Dropdown 菜单格式
  const getMenuItems = (menuList: MenuItems[]): any[] => {
    return menuList.map((item) => {
      if (item.subItems && item.subItems.length > 0) {
        return {
          label: item.title,
          key: item.title,
          children: getMenuItems(item.subItems)
        };
      } else {
        return {
          label: (
            <span onClick={() => item.href && handleMenuClick(item.href)}>
              {item.title}
            </span>
          ),
          key: item.href
        };
      }
    });
  };

  const menuItems = getMenuItems(items);

  return (
    <div className="w-full flex justify-between flex-col lg:flex-row gap-y-6 lg:gap-x-8 2xl:gap-x-16 lg:items-center">
      <div className="flex justify-between items-center">
        <Link href="/" aria-label="home">
          <Image
            src="/logo-light.png"
            alt="logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-[120px] h-auto"
          />
        </Link>

        <button
          type="button"
          onClick={handleToggle}
          aria-label="btn-navbar"
          className="block lg:hidden"
        >
          <AiOutlineAlignRight />
        </button>
      </div>
      {toggleState && (
        <>
          <div className="flex lg:hidden flex-col gap-y-5 tracking-wide ml-2">
            {items.map((item) => (
              item.subItems && item.subItems.length > 0 ? (
                <Dropdown
                  key={item.title}
                  menu={{ items: getMenuItems(item.subItems) }}
                  trigger={['click']}
                >
                  <a className="ant-dropdown-link text-sm lg:text-lg capitalize font-medium text-neutral-600" onClick={e => e.preventDefault()}>
                    <Space>
                      {item.title}
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              ) : (
                <Link
                  key={item.title}
                  href={item.href || "#"}
                  className="text-sm lg:text-lg capitalize font-medium text-neutral-600"
                >
                  {item.title}
                </Link>
              )
            ))}
          </div>
        </>
      )}
      <div className="hidden lg:flex gap-x-6 tracking-wide">
        {items.map((item) => (
          item.subItems && item.subItems.length > 0 ? (
            <Dropdown
              key={item.title}
              menu={{ items: getMenuItems(item.subItems) }}
              trigger={['hover']}
            >
              <a className="ant-dropdown-link capitalize font-medium text-neutral-600" onClick={e => e.preventDefault()}>
                <Space>
                  {item.title}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          ) : (
            <Link
              key={item.title}
              href={item.href || "#"}
              className="capitalize font-medium text-neutral-600"
            >
              {item.title}
            </Link>
          )
        ))}
      </div>

      < AiOutlineAlignRight className="hidden lg:block"/>
    </div>
  );
}