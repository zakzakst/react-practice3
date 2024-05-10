"use client";
import AtButton from "@/components/at/button";
import MoCounterButton from "@/components/mo/counterButton";

export default function TestComponents() {
  console.log(window.crypto.randomUUID());
  console.log(window.crypto.randomUUID());
  return (
    <div>
      <p>test components</p>
      <p>
        <AtButton>button</AtButton>
      </p>
      <MoCounterButton />
    </div>
  );
}
