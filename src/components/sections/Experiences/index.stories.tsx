import type { Meta, StoryObj } from '@storybook/react';

import ExperiencesSection from '.';

const meta: Meta<typeof ExperiencesSection> = {
  component: ExperiencesSection,
};

export default meta;
type Story = StoryObj<typeof ExperiencesSection>;

export const Primary: Story = {
  args: {},
};
