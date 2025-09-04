import { useMutation } from '@tanstack/react-query';
import CrashRequest from '../requests/CrashRequest';

export default function useCrash() {
	return useMutation({
		mutationKey: ['crash'],
		mutationFn: CrashRequest,
		onSuccess: (data) => {
			console.log(data);
		},
	});
}
