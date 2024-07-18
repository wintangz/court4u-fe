import { axiosGet, axiosPost } from './baseService';

var token: string | null = '';
var apiKey: string | null = 'est';

if (typeof window !== 'undefined') {
  token = localStorage?.getItem('accessToken');
}

if (typeof window !== 'undefined') {
  apiKey = localStorage?.getItem('api-key');
}

export const selectClub = (id: string) =>
  axiosGet(`/dashboard/owner/club/select/${id}`, {
    headers: { Authorization: token },
  });

// Club services
export const getClubs = () =>
  axiosGet('/dashboard/owner/club', {
    headers: { Authorization: token, 'api-key': apiKey as string },
  });

// Bill services
export const getBillsByClubId = () =>
  axiosGet('/dashboard/owner/bill/club', {
    headers: { Authorization: token, 'api-key': apiKey as string },
  });

// Booking services
export const getBookingsByClubId = () =>
  axiosGet('/dashboard/owner/booking/club', {
    headers: { Authorization: token, 'api-key': apiKey as string },
  });

// Club subscription services
export const getClubSubscriptionsByClubId = () =>
  axiosGet('/dashboard/owner/clubSubscription', {
    headers: { Authorization: token, 'api-key': apiKey as string },
  });

// Member subscription services
export const getMemberSubscriptionsByClubId = () =>
  axiosGet('/dashboard/owner/memberSubscription/club', {
    headers: { Authorization: token, 'api-key': apiKey as string },
  });

// Slot services
export const getSlotById = (slotId: string) =>
  axiosGet(`/dashboard/owner/slot/${slotId}`, {
    headers: { Authorization: token, 'api-key': apiKey as string },
  });

export const getSlotsByClubId = () =>
  axiosGet('/dashboard/owner/slot/club', {
    headers: { Authorization: token, 'api-key': apiKey as string },
  });

export const getSlotsOfClub = () =>
  axiosGet('/dashboard/owner/slot', {
    headers: {
      Authorization: token,
      'api-key': apiKey as string,
    },
  });
// Staff profile services
export const getStaffProfilesByClubId = () =>
  axiosGet('/dashboard/owner/staffProfile/', {
    headers: { Authorization: token, 'api-key': apiKey as string },
  });

export const createStaffProfile = (data: any) =>
  axiosPost(`/dashboard/owner/staffProfile`, data, {
    headers: { Authorization: token, 'api-key': apiKey as string },
  });

// Subscription options services
export const getSubscriptionOptionsByClubId = () =>
  axiosGet(`/dashboard/owner/subscriptionOption/club`, {
    headers: { Authorization: token, 'api-key': apiKey as string },
  });

// Booked slot services
export const getBookedSlotsByClubId = (clubId: string) =>
  axiosGet(`/dashboard/owner/bookedSlot/club`, {
    headers: { Authorization: token, 'api-key': apiKey as string },
  });

// Subscription for club services
export const getSubscriptionsForClub = () =>
  axiosGet(`/dashboard/owner/subscriptionForClub`, {
    headers: { Authorization: token, 'api-key': apiKey as string },
  });
