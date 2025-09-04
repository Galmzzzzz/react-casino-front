import { useMutation } from '@tanstack/react-query';
import Flip from '../requests/FlipRequest';

export default function useFlip() {
	return useMutation({
		mutationKey: ['Flip'],
		mutationFn: Flip,
		onSuccess: (data) => {
			console.log(data);
		},
	});
}
