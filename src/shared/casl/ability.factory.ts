import { CaslRuleEntity } from '@/core/database/entities';
import { AbilityBuilder, PureAbility } from '@casl/ability';

export type Action = 'manage' | 'read' | 'create' | 'update' | 'delete';
export type Subject = 'User' | 'all';

export type AppAbility = PureAbility<[Action, Subject]>;

export function buildAbility(userRule: CaslRuleEntity): AppAbility {
  const { can, build } = new AbilityBuilder<AppAbility>(PureAbility);

  can(userRule.action, userRule.subject);

  return build();
}
