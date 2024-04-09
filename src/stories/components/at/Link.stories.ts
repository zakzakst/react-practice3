import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, expect } from "@storybook/test";
import { screen } from "@storybook/testing-library";
import { Link } from "./Link";

const meta = {
  title: "Test/Link",
  component: Link,
  argTypes: {
    current: {
      control: "boolean",
      description: "リンク先が現在のページかどうか",
    },
  },
  args: { onClick: fn() },
  // args: {
  //   onClick: () => {
  //     console.log("click");
  //   },
  // },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoHref: Story = {
  args: {
    label: "hrefなし",
  },
};

export const NoHrefWithEvent: Story = {
  args: {
    current: false,
    label: "hrefなし（イベントあり）",
    // onClick: () => {
    //   console.log("event");
    // },
  },
};

export const HasHref: Story = {
  args: {
    href: "#",
    label: "hrefあり",
  },
};

export const HasHrefCurrent: Story = {
  args: {
    current: true,
    href: "#",
    label: "hrefあり（現在ページ）",
  },
};

HasHrefCurrent.play = async ({ args, canvasElement, step }) => {
  const links = screen.getAllByText((content, element) => {
    // console.log(content, element);
    return (
      element?.tagName.toLowerCase() === "a" &&
      content === "hrefあり（現在ページ）"
    );
  });
  const link = links[0];

  await step(
    "現在ページの指定がある場合、aria-currentの値がpageになる",
    async () => {
      // link.focus();
      // expect(link).toHaveFocus();
      // expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("aria-current", "page");
    }
  );

  await step("Tabキーを押すと要素にフォーカスできる", async () => {
    canvasElement.focus();
    await userEvent.tab();
    expect(link).toHaveFocus();
  });

  await step("要素にフォーカスした状態でEnterを実行できる", async () => {
    link.focus();
    await userEvent.keyboard("{enter}");
  });
};
