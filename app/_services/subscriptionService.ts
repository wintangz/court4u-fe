import { axiosGet, axiosPost } from './baseService';

var token: string | null = '';

if (typeof window !== 'undefined') {
  token = localStorage?.getItem('accessToken');
}

export const getClubSubscriptions = () =>
  axiosGet('/dashboard/admin/subscriptionforclub', {
    headers: { Authorization: token },
  });

export const buyMemberSubscription = (subId: string) =>
  axiosPost(
    '/memberSubscriptions/buy',
    { subscriptionId: subId },
    {
      headers: { Authorization: token },
    }
  );

export const buyClubSubscription = (data: any) =>
  axiosPost('/clubSubscriptions/buyFirstTime', data, {});

export const getCurrentSubscription = (clubId: string) =>
  axiosGet('/memberSubscriptions/find/' + clubId, {
    headers: { Authorization: token },
  });
