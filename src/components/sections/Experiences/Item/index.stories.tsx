import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import ExperienceItem from '.';

const meta: Meta<typeof ExperienceItem> = {
  component: ExperienceItem,
};

export default meta;
type Story = StoryObj<typeof ExperienceItem>;

export const Primary: Story = {
  args: {
    experience: {
      description: 'システム工学研究会 入部',
      organization: 'SET',
      start: dayjs('2023.04.01'),
      location: '愛工大4号館別館 310',
      overview: 'システム工学研究会に入部',
      url: 'https://set1.ie.aitech.ac.jp/',
    },
  },
};

export const Filled: Story = {
  args: {
    experience: {
      description: '愛知工業大学 入学',
      organization: 'AIT',
      start: dayjs('2023.04.01'),
      location: '愛知県豊田市',
      overview: '愛知工業大学 情報科学科コンピューターシステム専攻 に入学',
      url: 'https://set1.ie.aitech.ac.jp/',
      fill: true,
    },
  },
};
